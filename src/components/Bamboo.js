import { 
    Scene,
    AmbientLight,
    DirectionalLight,
    OrthographicCamera,
    WebGLRenderer,
    PCFSoftShadowMap,
    sRGBEncoding,
    Clock
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useEffect } from 'react'
import EventEmitter from '../utils/EventEmitter'

const Bamboo = () => {
    useEffect(() => {
        // Setting up canvas and scene
        const canvas = document.querySelector('.bamboo-webgl')
        canvas.style.opacity = 0
        const scene = new Scene()

        // Style canvas
        canvas.style.cursor = 'pointer'

        // Setting up clock and event emitter
        const clock = new Clock(false)

        window.addEventListener('bamboo', ()=> {
            clock.start()
        })

        canvas.addEventListener('click', () => {
            clock.stop()
            clock.start()
        })

        // Setting up loader
        const loader = new GLTFLoader
        loader.load(
            'models/bamboo_2.gltf',
            (gltf) => {
                gltf.scene.children[0].castShadow = true
                gltf.scene.children[0].receiveShadow = true
                gltf.scene.scale.set(0.16, 0.16, 0.16)
                gltf.scene.position.y -= 0.9
                
                scene.add(gltf.scene)
                tick()
            }, 
            (xhr) => {},
            (error) => {
                console.log('there was an error loading the bamboo model')
            }
        )

        // Setting up lights
        const light = new AmbientLight(0xffffff, 1.5)
        const dLight = new DirectionalLight(0xffffff, 2)

        dLight.position.set(1, 1, 1)
        dLight.castShadow = true
        dLight.shadow.mapSize.set(1024, 1024)
        dLight.shadow.normalBias = 0.03
        scene.add(light, dLight)

        // Setting up camera
        const camera = new OrthographicCamera(-1.15, 1.15, 1.15, -1.15, 0.001, 100)
        camera.position.y = 0.8
        camera.position.z = -1
        camera.position.x = 1
        
        scene.add(camera)
        
        // Setting up renderer
        const renderer = new WebGLRenderer({ canvas: canvas })

        renderer.setSize(Math.max(700 * 0.26, window.innerWidth * 0.26), Math.max(700 * 0.26, window.innerWidth * 0.26) / 0.726)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMap.type = PCFSoftShadowMap
        renderer.shadowMap.enabled = true
        renderer.physicallyCorrectLights = true
        renderer.outputEncoding = sRGBEncoding
        // renderer.toneMapping = CineonToneMapping

        // Setting up controls
        const controls = new OrbitControls(camera, canvas)
        controls.enabled = false
        
        // Animating function
        const tick = () => {
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
            if (clock.running) {
                scene.children[3].children[0].rotation.z += 0.5 / (10 * clock.getElapsedTime() + 0.5)
            }
        }

        // Add resize event listener
        window.addEventListener('resize', () => {
            if (window.innerWidth > 700) {
                renderer.setSize(window.innerWidth * 0.26, window.innerWidth * 0.26 / 0.726)
            }
        })
    })

    return (
        <canvas className='bamboo-webgl' visibility='hidden' />
    )
}

export default Bamboo