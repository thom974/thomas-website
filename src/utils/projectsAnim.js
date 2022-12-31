import anime from "animejs"

const projectsAnim = () => {
    const projectNumbers = document.querySelector('.projects-sidebar-numbers')
    const projectLetters = document.querySelector('.projects-sidebar-letters')
    const projectEntries = document.querySelector('.projects-entries')
    const projectSvg = document.querySelector('.projects-sidebar-svg')
    const lineAnimSvg = document.querySelector('.projects-line-svg-anim')

    projectSvg.style.visibility = 'visible'
    lineAnimSvg.style.visibility = 'visible'
    projectEntries.style.visibility = 'visible'

    const projectNumberTargets = []
    const projectLetterTargets = []

    for (let i=0; i < projectNumbers.children.length; i++) {
        const pathLength = projectNumbers.children[i].getTotalLength()
        projectNumbers.children[i].setAttribute('stroke-dasharray', pathLength)
        projectNumbers.children[i].setAttribute('stroke-dashoffset', pathLength)
        projectNumberTargets.push(projectNumbers.children[i])
    }

    for (let i=0; i < projectLetters.children.length; i++) {
        const pathLength = projectLetters.children[i].getTotalLength()
        projectLetters.children[i].setAttribute('stroke-dasharray', pathLength)
        projectLetters.children[i].setAttribute('stroke-dashoffset', pathLength)
        projectLetterTargets.push(projectLetters.children[i])
    }

    /**
     * ANIMATING PROJECTS HEADING (identical animation to about section)
     */
    const tl = anime.timeline({})

    // Animate text size and line (INITIAL ANIMATIONS)
    anime({
        targets: projectSvg,
        keyframes: [
            { width: 144, height: 707, duration: 0 },
            { translateX: '+=30vw', duration: 0 }, 
            { width: 48, height: 235.77, duration: 400, delay: 1750, easing: 'easeInCirc' },
            { translateX: 0, duration: 1500, easing: 'easeOutQuint'}
        ]
    })
    
    anime({
        targets: lineAnimSvg,
        keyframes: [
            { height: 0, duration: 0},
        ]
    })

    // Animate dash offset for numbers
    tl.add({
        targets: projectNumberTargets,
        keyframes: [
            { translateX: ['+=-50vh', 0], easing: 'easeOutQuint', delay: anime.stagger(50) },
        ]            
    }, 0)

    tl.add({
        targets: projectNumberTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        delay: anime.stagger(100),
    }, 200)

    tl.add({
        targets: projectNumberTargets,
        fill: '#56642a',
        easing: 'easeInOutQuint',
        duration: 1000,
        delay: anime.stagger(75)
    }, 400)

    // Animate dash offset for letters
    tl.add({
        targets: projectLetterTargets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuint',
        delay: anime.stagger(100)
    }, 600)

    tl.add({
        targets: projectLetterTargets,
        fill: '#56642A',
        easing: 'easeInOutQuint',
        delay: anime.stagger(60)
    }, 1000)

    // Animate line growing
    tl.add({
        targets: lineAnimSvg,
        height: '50%',
        duration: 500,
        easing: 'easeInOutQuint'
    }, 2750)

    // Animate project entries
    const offset =  window.innerWidth >= 600 ? 0 : 2700

    tl.add({
        targets: '.projects-entries .project-entry',
        translateX: offset > 0 ? ["+=-100vw", 0] : ["+=-50vw", 0],
        duration: 1000,
        easing: 'easeOutCirc',
        delay: anime.stagger(250),
        begin: (anim) => {
            const overlay = document.querySelector('.project-preview-overlay')
            overlay.style.visibility = 'visible'
            
            document.querySelectorAll('.project-entry').forEach(entry => {
                entry.style.visibility = 'visible'
            })
        }
    }, 3000 - offset)

// Animate projects preview overlay
    tl.add({
        targets: '.project-preview-overlay',
        height: '15%',
        duration: 100,
    }, 3300 - offset)

    tl.add({
        targets: '.project-preview-overlay',
        translateX: offset > 0 ? ["+=100vw", 0] : ["+=50vw", 0],
        duration: 500, 
        easing: 'easeInOutQuint',
        // begin: (anim) => {
        //     const overlay = document.querySelector('.project-preview-overlay')
        //     overlay.style.visibility = 'visible'
        // }
    }, 3300 - offset)

    tl.add({
        targets: '.project-preview-overlay',
        height: '75%',
        duration: 750,
        easing: 'easeInOutQuint'
    }, 3750 - offset)
}

export default projectsAnim