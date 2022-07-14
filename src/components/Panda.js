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
    MeshStandardMaterial
} from 'three'

import { useEffect } from 'react'

const Panda = () => {
    useEffect(() => {
        // Setting up canvas
        const canvas = document.querySelector('.webgl')
        canvas.style.visibility = 'visible'

        // Setting up scene
        const scene = new Scene()

        const plane = new Mesh( 
            new PlaneGeometry(1.5, 1.5), 
            new MeshStandardMaterial( { color: 0xffffff, side: DoubleSide } )
        );
        scene.add(plane)

        const light = new AmbientLight('0x404040', 1)
        scene.add(light)

        // Setting up camera
        const camera = new OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0.01, 100)
        camera.position.y = 1
        camera.position.z = 0.3
        camera.lookAt(0,0,0)
        scene.add(camera)
        
        // Setting up renderer
        const renderer = new WebGLRenderer({ canvas: canvas }) 

        renderer.setSize(400, 400)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const tick = () => {
            plane.rotation.z += 0.02
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        tick()
    })    

    return (
        <canvas className='webgl' width={400} height={400} visibility='hidden'/>
    )
}

export default Panda