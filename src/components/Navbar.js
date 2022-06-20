import Stack from "@mui/material/Stack"

import { useEffect } from 'react'

import { 
    Typography 
} from "@mui/material"

import anime from "animejs"

const Navbar = () => {
    useEffect(() => {
        document.querySelector('.nav-home').style.visibility = 'visible'
        document.querySelector('.nav-projects').style.visibility = 'visible'
        document.querySelector('.nav-spacing-left').style.visibility = 'visible'
        document.querySelector('.nav-spacing-right').style.visibility = 'visible'

        // Nav heading translation animations
        anime({
            targets: '.nav-home',
            translateX: ['+=150%', 0],
            duration: 500,
            easing: 'easeOutBack',
            delay: 2800
        })

        anime({
            targets: '.nav-projects',
            translateX: ['+=-150%', 0],
            duration: 500,
            easing: 'easeOutBack',
            delay: 2800
        })

        // Spacer translation animations
        anime({
            targets: '.nav-spacing-left',
            translateX: ['+=1250%', 0],
            duration: 1000,
            easing: 'easeInQuint',
            delay: 2000
        })

        anime({
            targets: '.nav-spacing-right',
            translateX: ['+=-1250%', 0],
            duration: 1000,
            easing: 'easeInQuint',
            delay: 2000
        })

        // Opacity animations
        anime({
            targets: '.nav-about',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            delay: 2700
        })

        anime({
            targets: '.nav-home',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            delay: 2300
        })

        anime({
            targets: '.nav-projects',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            delay: 2400
        })

        anime({
            targets: '.nav-spacing-left',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            delay: 2200
        })

        anime({
            targets: '.nav-spacing-right',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            delay: 2200
        })
    })

    return (
        <Stack justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={50}>
                <Typography className='nav-home' variant="navbar_main" visibility='hidden'>home</Typography>
                <Typography className='nav-spacing-left' variant="navbar_alt" visibility='hidden'>/</Typography>
                <Typography className='nav-about' variant="navbar_main">about me</Typography>
                <Typography className= 'nav-spacing-right' variant="navbar_alt" visibility='hidden'>/</Typography>
                <Typography className='nav-projects' variant="navbar_main" visibility='hidden'>projects</Typography>
            </Stack>
        </Stack>
    )
}

export default Navbar