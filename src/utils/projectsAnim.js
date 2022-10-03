import anime from "animejs"

const projectsAnim = () => {
    const projectNumbers = document.querySelector('.projects-sidebar-numbers')
    const projectLetters = document.querySelector('.projects-sidebar-letters')
    const projectSvg = document.querySelector('.projects-sidebar-svg')
    const lineAnimSvg = document.querySelector('.projects-line-svg-anim')

    projectSvg.style.visibility = 'visible'
    lineAnimSvg.style.visibility = 'visible'

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
     * ANIMATING PROJECTS HEADING
     */

    
}

export default projectsAnim