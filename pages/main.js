import Navbar from "../src/components/Navbar"
import Intro from "../src/components/Intro"

import anime from "animejs"

import { useEffect } from 'react'

import { 
    Stack,
    Typography,
    Box,
    Divider
} from "@mui/material"


const Main = () => {
    useEffect(() => {
        const lines = document.querySelectorAll('.line-svg path')
        const lineTargets = []
        
        for (let i=0; i<lines.length; i++) {
            lines[i].style.visibility = 'visible'
            const lineLength = lines[i].getTotalLength()
            lines[i].setAttribute('stroke-dasharray', lineLength)
            lines[i].setAttribute('stroke-dashoffset', lineLength)
            lineTargets.push(lines[i])
        }
        
        const animTimeline = anime.timeline({
            direction: 'normal'
        })
    
        animTimeline.add({
            targets: '.line-svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuint',
            duration: 2500
        })
    })

    return (
        <Stack 
            direction='row' 
            spacing={0} 
            alignItems='center' 
            justifyContent='center'
            mt={50}
            height='100%'
        >
            <Stack
                direction='column'
                width='25%'
                height='inherit'
                justifyContent='center'
                alignItems='flex-start'
                spacing={36}
                pl={53}
                pr={53}
                pb={53}
            >
                <Box
                    component='img'
                    src='/logos/linkedin.png'
                >
                </Box>
                <Box
                    component='img'
                    src='/logos/github.png'
                >
                </Box>
                <Box
                    component='img'
                    src='/logos/email.png'
                >
                </Box>
                <svg 
                    className='line-svg'
                    height='50%'
                    width='46px'
                    viewBox='0 0 2 400'
                    visibility='hidden'
                >
                    <path stroke='#56642A' strokeWidth={2} d='M0 0 V 400' />
                </svg>
            </Stack>

            <Stack
                direction='column'
                spacing={120}
                width='50%'
                height='inherit'
            >
                <Navbar />
                <Intro />
            </Stack>

            <Stack
                direction='column'
                width='25%'
                height='inherit'
                justifyContent='center'
                alignItems='flex-end'
                spacing={36}
                pl={53}
                pr={53}
                pb={53}
            >
                <svg 
                    className='line-svg'
                    height='50%'
                    width='46px'
                    viewBox='0 0 2 400'
                    visibility='hidden'
                >
                    <path stroke='#56642A' strokeWidth={2} d='M0 400 V 0' />
                </svg>
                <Typography
                    variant="navbar_main"
                    className='vertical_rl'
                    sx={{ color: '#56642A'}}
                >
                    scroll down
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Main