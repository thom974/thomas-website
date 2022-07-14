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

const Panda = () => {
    useEffect(() => {
        // Setting up canvas and scene
        const canvas = document.querySelector('.webgl')
        canvas.style.visibility = 'visible'
        const scene = new Scene()

        // Setting up loader
        const loader = new GLTFLoader()
        loader.load(
            'models/panda_2.gltf', 
            (gltf) => {
                gltf.scene.children[0].castShadow = true
                gltf.scene.children[0].receiveShadow = true
                gltf.scene.scale.set(0.24, 0.24, 0.24)
                scene.add(gltf.scene)
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
        const camera = new OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0.01, 100)
        camera.position.y = 0.5
        camera.position.z = -0.5
        camera.position.x = 0.5
        
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

        const tick = () => {
            // plane.rotation.z += 0.02
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
            controls.update()
        }

        tick()
    })    

    return (
        <canvas className='webgl' width={400} height={400} visibility='hidden'/>
    )
}

export default Panda