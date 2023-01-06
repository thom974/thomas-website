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
    CineonToneMapping,
    Clock
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useEffect } from 'react'
import anime from 'animejs'

const Panda = () => {
    useEffect(() => {
        // Setting up canvas and scene
        const canvas = document.querySelector('.panda-webgl')
        canvas.style.visibility = 'visible'
        canvas.style.opacity = 0
        const scene = new Scene()

        // Style canvas
        canvas.style.cursor = 'pointer'

        // Setup clock
        const clock = new Clock(false)
        
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
                // anime({
                //     targets: scene.children[3].children[0].rotation,
                //     z: [`+=${Math.PI * 2 * 8}`, '+=0'],
                //     duration: 3000,
                //     easing: 'easeOutSine',
                //     delay: 1750,
                //     complete: (anim) => {
                //         clock.start()
                //         console.log('started the clock!')
                //     }
                // })
                // anime({
                //     targets: scene.children[3].children[0].rotation,
                //     z: `+=${Math.PI * 2}`,
                //     duration: 2000,
                //     delay: 4500
                // })

                tick()
            }, 
            (xhr) => {},
            (error) => {
                console.log('there was an error loading the panda model')
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
        camera.position.y = 1
        camera.position.z = -1
        camera.position.x = 1
    
        scene.add(camera)
        
        // Setting up renderer
        const renderer = new WebGLRenderer({ canvas: canvas }) 
        
        // Initalize canvas size depending on initial viewport size
        if (window.innerWidth < 600 || window.innerHeight < 600) {
            renderer.setSize(250, 250)            
        } else if (window.innerWidth >= 600 && window.innerWidth < 1100 || window.innerHeight >= 600 && window.innerHeight < 1000) {
            renderer.setSize(450, 450)
        } else {
            renderer.setSize(600, 600)            
        }

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
            if (clock.running){
                scene.children[3].children[0].rotation.z += 0.5 / (10 * clock.getElapsedTime() + 0.5) 
            }
        }

        // Adding event listener for canvas
        canvas.addEventListener('click', () => {
            clock.stop()
            clock.start()
        })
        

        // Animate opacity of canvas
        anime({
            targets: canvas,
            opacity: 1,
            duration: 1000,
            easing: 'easeInSine',
            delay: 3200,
            complete: (anim) => {
                clock.start()
            }
        })

        // Resize event listener
        let mobile = window.innerWidth < 600 ? true : false
        let small = !mobile && window.innerWidth < 1100 ? true : false
        let large = !mobile && !small ? true : false

        let mobileH = window.innerHeight < 600 ? true : false
        let smallH = !mobileH && window.innerHeight < 1000 ? true : false
        let largeH = !mobileH && !smallH ? true : false
        window.addEventListener('resize', () => {
            // For width
            if (mobile && window.innerWidth >= 600) {
                mobile = false
                small = true

                renderer.setSize(450,450)
            }

            if (small && window.innerWidth < 600) {
                mobile = true
                small = false

                renderer.setSize(250, 250)
            }

            if (small && window.innerWidth >= 1100) {
                small = false
                large = true

                renderer.setSize(600, 600)
            }
            
            if (large && window.innerWidth < 1100) {
                small = true
                large = false

                renderer.setSize(450,450)
            }

            // For height
            if (mobileH && window.innerHeight >= 600) {
                mobileH = false
                smallH = true

                renderer.setSize(450,450)
            }

            if (smallH && window.innerHeight < 600) {
                mobileH = true
                smallH = false

                renderer.setSize(250, 250)
            }

            if (smallH && window.innerHeight >= 1000) {
                smallH = false
                largeH = true

                renderer.setSize(600, 600)
            }
            
            if (largeH && window.innerHeight < 1000) {
                smallH = true
                largeH = false

                renderer.setSize(450,450)
            }
        })

    })    

    return (
        <canvas 
            className='panda-webgl' 
            visibility='hidden' 
            width='inherit' 
            // height='45%'
            sx={{
                height: {
                    m: '45%', xxs: '30%'
                }
            }}
        />
    )
}

export default Panda