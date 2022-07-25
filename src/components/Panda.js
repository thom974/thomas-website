import { 
    Scene, 
    OrthographicCamera,
    WebGLRenderer,
    Mesh, 
    PlaneGeometry,
    MeshBasicMaterial,
    DoubleSide,
    AmbientLight,
    BoxGeometry,
    MeshStandardMaterial,
    PointLight,
    DirectionalLight,
    PCFSoftShadowMap,
    sRGBEncoding,
    ReinhardToneMapping,
    CineonToneMapping
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useEffect } from 'react'
import anime from 'animejs'

const Panda = () => {
    useEffect(() => {
        // Setting up canvas and scene
        const canvas = document.querySelector('.webgl')
        canvas.style.visibility = 'visible'
        canvas.style.opacity = 0
        const scene = new Scene()

        // Setting up animation timeline
        const tl = anime.timeline()
        
        // Setting up loader
        const loader = new GLTFLoader()
        loader.load(
            'models/panda_2.gltf', 
            (gltf) => {
                gltf.scene.children[0].castShadow = true
                gltf.scene.children[0].receiveShadow = true
                gltf.scene.scale.set(0.24, 0.24, 0.24)
                scene.add(gltf.scene)

                // Handle animations once panda is loaded
                anime({
                    targets: scene.children[3].children[0].rotation,
                    z: [`+=${Math.PI * 2 * 5}`, '+=0'],
                    duration: 2000,
                    easing: 'easeInOutCubic',
                    delay: 1000,
                    direction: 'alternate',
                    loop: true
                })
                tick()
            }, 
            (xhr) => {},
            (error) => {
                console.log('there was an error loading the panda model')
            }
        )

        // Setting up objects/models to display
        const plane = new Mesh( 
            new PlaneGeometry(1.5, 1.5), 
            new MeshStandardMaterial( { color: 0xffffff, side: DoubleSide } )
        );
        plane.rotateX(-Math.PI * 0.5)
        plane.receiveShadow = true
        // scene.add(plane)
        
        // Setting up lights
        const light = new AmbientLight(0xffffff, 1.5)
        const dLight = new DirectionalLight(0xffffff, 2)

        dLight.position.set(1, 1, 1)
        dLight.castShadow = true
        dLight.shadow.mapSize.set(1024, 1024)
        dLight.shadow.normalBias = 0.03
        scene.add(light, dLight)
        console.log(dLight.shadow)

        // Setting up camera
        const camera = new OrthographicCamera(-1.15, 1.15, 1.15, -1.15, 0.001, 100)
        camera.position.y = 1
        camera.position.z = -1
        camera.position.x = 1
        
        camera.lookAt(0,0,0)
        scene.add(camera)
        
        // Setting up renderer
        const renderer = new WebGLRenderer({ canvas: canvas }) 

        renderer.setSize(400, 400)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMap.type = PCFSoftShadowMap
        renderer.shadowMap.enabled = true
        renderer.physicallyCorrectLights = true
        renderer.outputEncoding = sRGBEncoding
        // renderer.toneMapping = CineonToneMapping

        // Setting up controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        // Animating function
        const tick = () => {
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
            controls.update()
        }

        // Animate opacity of canvas
        anime({
            targets: canvas,
            opacity: 1,
            duration: 1000,
            easing: 'easeInSine',
            delay: 3200
        })
    })    

    return (
        <canvas className='webgl' width={400} height={400} visibility='hidden'/>
    )
}

export default Panda