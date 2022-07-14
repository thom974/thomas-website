import * as THREE from 'three'

import Time from '../utils/Time'

export default class PandaModel {
    constructor(canvas) {
        this.canvas = canvas
        this.scene = new THREE.Scene()
        this.time = new Time()

        this.setupCamera()
        this.setupRenderer()
        
        this.time.on('tick', () => {
            this.animate()
        })
    }

    setupCamera() {
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
        this.scene.add(this.camera)
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas })
        this.renderer.setSize(400, 400)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    animate() {
        this.renderer.render(this.scene, this.camera)
    }
}