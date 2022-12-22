import anime from "animejs"

const mainAnim = () => {
    const line = document.querySelector('.intro-line-svg path')
    
    const lineAnim = document.querySelector('.intro-line-svg-anim path')
    const lineSvg = document.querySelector('.intro-line-svg')
    const lineAnimSvg = document.querySelector('.intro-line-svg-anim')
    lineSvg.style.visibility = 'visible'
    lineAnimSvg.style.visibility = 'visible'

    const scrollLetters = document.querySelector('.intro-scroll-svg .layer-one .text682')
    const scrollSvg = document.querySelector('.intro-scroll-svg')
    scrollSvg.style.visibility = 'visible'

    const logos = document.querySelectorAll('.logo-bar .logo path')
    
    const scrollLetterTargets = []
    const logoTargets = []

    for (let i=0; i<logos.length; i++) {
        const pathLength = logos[i].getTotalLength()
        logos[i].setAttribute('stroke-dasharray', pathLength)
        logos[i].setAttribute('stroke-dashoffset', pathLength)
        logoTargets.push(logos[i])
    }
    
    for (let i=0; i<scrollLetters.children.length; i++) {
        const pathLength = scrollLetters.children[i].getTotalLength()
        scrollLetters.children[i].setAttribute('stroke-dasharray', pathLength)
        scrollLetters.children[i].setAttribute('stroke-dashoffset', pathLength)
        scrollLetterTargets.push(scrollLetters.children[i])
    }

    line.setAttribute('stroke-dasharray', line.getTotalLength())
    line.setAttribute('stroke-dashoffset', line.getTotalLength())

    lineAnim.setAttribute('stroke-dasharray', lineAnim.getTotalLength())
    lineAnim.setAttribute('stroke-dashoffset', lineAnim.getTotalLength())

    // Animate side lines

    anime({
        targets: line,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        duration: 1500,
        delay: 2000
    })

    anime({
        targets: lineAnim,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 1500,
        delay: 2000
    }).finished.then(() => {
        anime({
            targets: lineAnim,
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutQuart',
            duration: 1500,
        }).finished.then(() => {
            anime({
                targets: lineAnim,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuart',
                direction: 'alternate',
                loop: true,
                duration: 1500,
            })
        })
    })

    // Animate 'scroll down' message
    anime({
        targets: scrollLetterTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        duration: 1500,
        delay: 2000
    }).finished.then(() => {
        anime({
            targets: scrollLetterTargets,
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutQuint',
            duration: 1500,
        }).finished.then(() => {
            anime({
                targets: scrollLetterTargets,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutQuint',
                direction: 'alternate',
                loop: true,
                duration: 1500,
            })
        })
    })

    // Animate colours for 'scroll down' message
    anime({
        targets: scrollLetterTargets,
        fill: '#56642a',
        easing: 'easeInOutQuint',
        duration: 1500,
        delay: 2000
    }).finished.then(() => {
        anime({
            targets: scrollLetterTargets,
            fill: '#ffffff',
            easing: 'easeInOutQuint',
            duration: 1500,
        }).finished.then(() => {
            anime({
                targets: scrollLetterTargets,
                fill: '#56642a',
                easing: 'easeInOutQuint',
                direction: 'alternate',
                loop: true,
                duration: 1500,
            })
        })
    })

    // Animate logos (linkedin, github, email)
    anime({
        targets: logoTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCirc',
        duration: 1500,
        delay: 2000
    })

    anime({
        targets: document.querySelectorAll('.logo'),
        fill: '#56642a',
        easing: 'easeInCirc',
        duration: 500,
        delay: 3500,
    })

    // Make logo descriptions invisible
    anime({
        targets: '.logo-desc',
        opacity: 0,
        duration: 1
    })
}

export default mainAnim
