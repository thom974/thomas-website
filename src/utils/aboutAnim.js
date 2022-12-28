import anime from 'animejs'

const aboutAnim = () => {
    const aboutNumbers = document.querySelector('.about-sidebar-numbers')
    const aboutLetters = document.querySelector('.about-sidebar-letters')
    const aboutSvg = document.querySelector('.about-sidebar-svg')
    const lineAnimSvg = document.querySelector('.about-line-svg-anim')
    const bambooModel = document.querySelector('.bamboo-webgl')

    aboutSvg.style.visibility = 'visible'
    lineAnimSvg.style.visibility = 'visible'
    bambooModel.style.visibility = 'visible'

    const aboutNumberTargets = []
    const aboutLetterTargets = []
    const aboutTextOverlayTargets = document.querySelectorAll('.about-text .about-text-entry .about-text-overlay')

    for (let i=0; i<aboutTextOverlayTargets.length; i++) {
        aboutTextOverlayTargets[i].style.visibility = 'visible'
    }

    for (let i=0; i<aboutNumbers.children.length; i++) {
        const pathLength = aboutNumbers.children[i].getTotalLength()
        aboutNumbers.children[i].setAttribute('stroke-dasharray', pathLength)
        aboutNumbers.children[i].setAttribute('stroke-dashoffset', pathLength)
        aboutNumberTargets.push(aboutNumbers.children[i])
    }

    for (let i=0; i<aboutLetters.children.length; i++) {
        const pathLength = aboutLetters.children[i].getTotalLength()
        aboutLetters.children[i].setAttribute('stroke-dasharray', pathLength)
        aboutLetters.children[i].setAttribute('stroke-dashoffset', pathLength)
        aboutLetterTargets.push(aboutLetters.children[i])
    }

    /**
     * ANIMATING ABOUT ME HEADING
     */

    const tl = anime.timeline({})

    // Animate text size and line (INITIAL ANIMATIONS)
    anime({
        targets: document.querySelector('.about-sidebar-svg-container'),
        keyframes: [
            { width: '140px', height: '688px', duration: 1 },
            { translateX: '+=30vw', duration: 1 }, 
            { width: '48px', height: '236px', duration: 400, delay: 3600, easing: 'easeInCirc' },
            { translateX: 0, duration: 1500, easing: 'easeOutQuint'}
        ]
    })
    
    anime({
        targets: '.about-line-svg-anim',
        keyframes: [
            { height: 0, duration: 0},
        ]
    })

    // Animate dash offset for numbers
    tl.add({
        targets: aboutNumberTargets,
        keyframes: [
            { translateX: ['+=-50vh', 0], easing: 'easeOutQuint', delay: anime.stagger(200) },
        ]            
    }, 0)
    
    tl.add({
        targets: aboutNumberTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        delay: anime.stagger(200),
    }, 400)

    tl.add({
        targets: aboutNumberTargets,
        fill: '#A7BC5B',
        easing: 'easeInOutQuint',
        duration: 1000,
        delay: anime.stagger(300)
    }, 800)

    // Animate dash offset for letters
    tl.add({
        targets: aboutLetterTargets,
        translateX: ["+=-50vh", 0],
        easing: 'easeOutQuint',
        delay: anime.stagger(200)
    }, 800)

    tl.add({
        targets: aboutLetterTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        delay: anime.stagger(200)
    }, 1200)


    tl.add({
        targets: aboutLetterTargets,
        fill: '#56642A',
        easing: 'easeInOutQuint',
        delay: anime.stagger(200)
    }, 1400)

    // Animate line growing
    tl.add({
        targets: '.about-line-svg-anim',
        height: '50%',
        duration: 1000,
        easing: 'easeInOutQuint'
    }, 4500)

    /**
     * ANIMATE TEXT CONTENT OF ABOUT PAGE
     *  */

    anime({
        targets: '.about-text .about-text-entry .about-text-overlay',
        height: 0,
        duration: 0,
    })

    anime({
        targets: '.about-text .about-text-entry .about-text-overlay',
        height: document.querySelector('.about-text-content').offsetHeight,
        duration: 750, 
        easing: 'easeInOutQuint',
        direction: 'alternate',
        delay: 5100 + anime.stagger(100)
    })

    anime({
        targets: '.about-text .about-text-entry .about-text-content',
        color: '#000000',
        duration: 1,
        delay: 5800
    })

    // Animate canvas opacity
    anime({
        targets: '.bamboo-webgl',
        opacity: 1,
        easing: 'easeInSine',
        duration: 500,
        delay: 6250,
        complete: (anim) => {
            const bambooEvent = new Event('bamboo')
            window.dispatchEvent(bambooEvent)
        }
    })
}

export default aboutAnim