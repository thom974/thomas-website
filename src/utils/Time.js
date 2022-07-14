import EventEmitter from "./EventEmitter.js"

export default class Time extends EventEmitter {
    constructor() {
        super()

        // Properties 
        this.start = Date.now()
        this.since = 0
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
        
        this.shakeTimer = 0

        // Setup
        window.requestAnimationFrame(() => {
            this.tick()
        })

    }

    tick() {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.since = Date.now() - this.start
        this.shakeTimer += this.delta
        this.trigger('tick')

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}