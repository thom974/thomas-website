import Stack from "@mui/material/Stack"

import { useEffect } from 'react'
import { styled } from "@mui/system"
import { Typography } from "@mui/material"

import anime from "animejs"

const Redirect = styled('a')({
    transition: '0.3s',
    '&:hover': {
        color: '#56642A',
        fontSize: 35
    }
})

const Navbar = ({ num, delay }) => {
    useEffect(() => {
        document.querySelector(`.nav-home-${num}`).style.visibility = 'visible'
        document.querySelector(`.nav-projects-${num}`).style.visibility = 'visible'
        document.querySelector(`.nav-spacing-left-${num}`).style.visibility = 'visible'
        document.querySelector(`.nav-spacing-right-${num}`).style.visibility = 'visible'
        document.querySelector(`.nav-about-${num}`).style.visibility = 'visible'

        const tl = anime.timeline({})
        tl.autoplay = false
        
        // Listen for event emitted
        window.addEventListener(`navbar-${num}`, () => {
            tl.play()
        })

        // Nav heading translation animations
        tl.add({
            targets: `.nav-home-${num}`,
            translateX: ['+=150%', 0],
            duration: 500,
            easing: 'easeOutBack',
            // delay: 2800
        }, 800 + delay)

        tl.add({
            targets: `.nav-projects-${num}`,
            translateX: ['+=-150%', 0],
            duration: 500,
            easing: 'easeOutBack',
            // delay: 2800
        }, 800 + delay)

        // Spacer translation animations
        tl.add({
            targets: `.nav-spacing-left-${num}`,
            translateX: ['+=1250%', 0],
            duration: 1000,
            easing: 'easeInQuint',
            // delay: 2000
        }, 0 + delay)

        tl.add({
            targets: `.nav-spacing-right-${num}`,
            translateX: ['+=-1250%', 0],
            duration: 1000,
            easing: 'easeInQuint',
            // delay: 2000
        }, 0 + delay)

        // Opacity animations
        tl.add({
            targets: `.nav-about-${num}`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            // delay: 2700
        }, 700 + delay)

        tl.add({
            targets: `.nav-home-${num}`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            // delay: 2300
        }, 300 + delay)

        tl.add({
            targets: `.nav-projects-${num}`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            // delay: 2400
        }, 400 + delay)

        tl.add({
            targets: `.nav-spacing-left-${num}`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            // delay: 2200
        }, 200 + delay)

        tl.add({
            targets: `.nav-spacing-right-${num}`,
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInQuint',
            // delay: 2200
        }, 200 + delay)
    })

    return (
        <Stack className={`.navbar-${num}`} justifyContent="center" alignItems="center" width='100%' height='10%'>
            <Stack direction="row" spacing={50}>
                <Typography className={`nav-home-${num}`} variant="navbar_main" visibility='hidden'><Redirect href='#home'>home</Redirect></Typography>
                <Typography className={`nav-spacing-left-${num}`} variant="navbar_alt" visibility='hidden'>/</Typography>
                <Typography className={`nav-about-${num}`} variant="navbar_main" visibility='hidden'><Redirect href='#aboutme'>about me</Redirect></Typography>
                <Typography className= {`nav-spacing-right-${num}`} variant="navbar_alt" visibility='hidden'>/</Typography>
                <Typography className={`nav-projects-${num}`} variant="navbar_main" visibility='hidden'><Redirect href='#projects'>projects</Redirect></Typography>
            </Stack>
        </Stack>
    )
}

export default Navbar