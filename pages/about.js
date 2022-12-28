import {
    Stack, 
    Typography,
    Box
} from '@mui/material'

import { useEffect, useRef } from 'react'

import anime from "animejs"

import Bamboo from '../src/components/Bamboo'

import Navbar from '../src/components/Navbar'

const About = () => {
    return (
        <Stack
            className='about-stack-container scroll-snap-child'
            id='aboutme'
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
            height='100%'
            width='100%'
        >
            <Navbar num='2' delay={6000}/>
            <Stack 
                className='about-stack'
                width='100%'
                height='90%'
                justifyContent='center'
                alignItems='center'
                direction='row'
            >
                <Stack
                    className='about-sidebar'
                    width='10%'
                    height='100%'
                    direction='column'
                    justifyContent='center'
                    alignItems='flex-start'
                    display={{ xs: 'flex', xxs: 'none' }}
                    spacing={36}
                    pl={53}
                    pr={53}
                    pb={53}
                >
                    {/* <Box> */}
                        <svg 
                            className='about-line-svg-anim'
                            height='50%'
                            width='46px'
                            viewBox='0 0 2 400'
                            visibility='hidden'
                        >
                            <path stroke='#56642A' strokeWidth={2} d='M0 400 V 0' />
                        </svg>
                    {/* </Box> */}
                    
                    <Box
                        className='about-sidebar-svg-container'
                        sx={{
                            // display: { xs: 'flex', xxs: 'none' },
                            // width: { sm: '48px', xxs: '30px' },
                            // height: { sm: '236px', xxs: '147px' }
                        }}
                    >
                        <svg 
                            className='about-sidebar-svg' 
                            width='100%' 
                            height='100%'
                            viewBox="0 0 12.70001 62.383308" 
                            strokeWidth=".200042" 
                            visibility='hidden'>
                            <g id="layer1" transform="translate(-101.11143 -104.97777)">
                                <g className='about-sidebar-numbers' aria-label="1" transform="rotate(90)" id="text3269" opacity={0.217} fill='none' stroke='#A7BC5B'>
                                    <path d="M110.12833-101.11143q-1.46403 0-2.64583-.74083-1.16417-.74084-1.83445-2.15195-.67028-1.42875-.67028-3.45722 0-2.02848.67028-3.43959.67028-1.42875 1.83445-2.16958 1.1818-.74084 2.64583-.74084 1.48167 0 2.64584.74084 1.16416.74083 1.83444 2.16958.68792 1.41111.68792 3.43959 0 2.02847-.68792 3.45722-.67028 1.41111-1.83444 2.15195-1.16417.74083-2.64584.74083zm0-1.9932q.86431 0 1.49931-.45861.635-.47625.98778-1.44639.37041-.97014.37041-2.4518 0-1.49931-.37041-2.45181-.35278-.97014-.98778-1.42875-.635-.47625-1.49931-.47625-.82903 0-1.48167.47625-.635.45861-1.00541 1.42875-.35278.9525-.35278 2.45181 0 1.48166.35278 2.4518.37041.97014 1.00541 1.44639.65264.45861 1.48167.45861z" id="path3281"/>
                                    <path d="M118.80147-101.28782v-11.46528l1.00542 1.04069h-3.61598v-1.92264h4.90362v12.34723z" id="path3283"/>
                                </g>
                                <g className='about-sidebar-letters' aria-label="about me" transform="rotate(90)" id="text253" fill='none' stroke='#56642A'>
                                    <path d="M121.79406-104.36134v-1.16629l-.0409-.20461v-1.97451q0-.65476-.37854-1.0026-.3683-.35807-1.1049-.35807-.51153 0-.97191.16369t-.78775.43992l-.36831-.6343q.41946-.33761.99237-.52176.58315-.19438 1.22767-.19438 1.07422 0 1.65736.53199.59338.53199.59338 1.61643v3.30449zm-1.81082.0511q-.61383 0-1.06398-.19438-.43992-.20461-.68545-.56268-.24554-.35808-.24554-.81845 0-.42969.20462-.77753.20461-.35807.67522-.56268.4706-.21484 1.24813-.21484h1.79035v.62406h-1.75966q-.74683 0-1.03329.266-.27623.25576-.27623.6343 0 .42968.33761.68545.33761.25576.94122.25576.58314 0 1.01283-.25576.42968-.266.62407-.7673l.17392.58314q-.19439.51153-.69568.80822-.49107.29669-1.24814.29669z" id="path3286"/>
                                    <path d="M127.32881-104.31019q-.69568 0-1.25836-.30692-.56269-.31715-.89006-.93098-.32738-.62407-.32738-1.51413 0-.90029.32738-1.5039.33761-.61384.90029-.93098.56268-.31715 1.24813-.31715.78776 0 1.39136.34784.61384.34784.96168.9719.35807.61384.35807 1.43229t-.35807 1.44251q-.34784.61384-.96168.96168-.6036.34784-1.39136.34784zm-2.82364-.0511v-7.59111h.85937v3.71371l-.10231 1.16629.0614 1.16629v1.54482zm2.76226-.69568q.54222 0 .97191-.24554.43991-.25576.68545-.70591.25576-.46038.25576-1.05375 0-.60361-.25576-1.05375-.24554-.45015-.68545-.69568-.42969-.25577-.97191-.25577-.55245 0-.98214.25577-.42968.24553-.68545.69568-.25576.45014-.25576 1.05375 0 .59337.25576 1.05375.25577.45015.68545.70591.42969.24554.98214.24554z" id="path3288"/>
                                    <path d="M133.72292-104.31019q-.79799 0-1.43228-.34784-.62407-.35807-.99237-.98214-.35807-.62407-.35807-1.42205 0-.80822.35807-1.42206.3683-.62406.99237-.9719.62406-.35807 1.43228-.35807.79799 0 1.42205.35807.6343.34784.99237.9719.35807.61384.35807 1.42206 0 .79798-.35807 1.42205t-.99237.98214q-.62406.34784-1.42205.34784zm0-.74683q.55245 0 .98214-.24554.42968-.25576.67522-.70591.25576-.46038.25576-1.05375 0-.60361-.25576-1.05375-.24554-.45015-.67522-.69568-.42969-.25577-.98214-.25577t-.98214.25577q-.42968.24553-.68545.69568-.25576.45014-.25576 1.05375 0 .59337.25576 1.05375.25577.45015.68545.70591.42969.24554.98214.24554z" id="path3290"/>
                                    <path d="M140.16818-104.31019q-.69568 0-1.21744-.25577-.51153-.25576-.79798-.76729-.28646-.52176-.28646-1.30952v-3.12033h.84914v3.02826q0 .82868.39899 1.24813.40923.41946 1.14583.41946.54222 0 .93098-.21485.399-.22507.61384-.64453.21484-.42968.21484-1.02306v-2.81341h.84914v5.40176h-.81845v-1.46298l.14323.32738q-.26599.56268-.79798.87983-.53199.30692-1.22768.30692z" id="path3292"/>
                                    <path d="M146.60322-104.31019q-.78775 0-1.21744-.41945-.42968-.42969-.42968-1.20722v-5.00276h.84914v4.96184q0 .46038.22507.70591.2353.24554.67522.24554.46038 0 .77753-.266l.27622.61384q-.21484.18415-.52176.27622-.30692.0921-.6343.0921zm-2.58834-4.747v-.70591h3.39656v.70591z" id="path3294"/>
                                    <path d="M158.47071-109.81425q.66499 0 1.15606.25576.49107.25577.7673.77753.27622.51153.27622 1.29928v3.12034h-.84914v-3.02826q0-.81845-.38876-1.2379-.38876-.41946-1.09468-.41946-.51153 0-.90029.22507-.38876.21485-.6036.6343-.20462.40923-.20462 1.01283v2.81342h-.85937v-3.02826q0-.81845-.38876-1.2379-.37853-.41946-1.08444-.41946-.51153 0-.9003.22507-.38876.21485-.6036.6343-.20461.40923-.20461 1.01283v2.81342h-.85937v-5.40176h.81844v1.45274l-.13299-.30691q.25576-.56269.78775-.87983.54223-.31715 1.2686-.31715.77752 0 1.32998.38876.56268.38876.7366 1.17652l-.33761-.133q.2353-.64453.83891-1.03329.6036-.39899 1.43228-.39899z" id="path3296"/>
                                    <path d="M164.91597-104.31019q-.85937 0-1.5039-.34784-.64452-.35807-1.01283-.98214-.35807-.62407-.35807-1.42205 0-.79799.34784-1.42206.34784-.62406.95145-.9719.61383-.35807 1.38113-.35807t1.36067.34784q.59337.34784.93098.9719.34784.62407.34784 1.44252 0 .0614-.0102.133v.13299h-4.64469v-.62406h4.18432l-.33761.22507q.0102-.55245-.23531-.98214-.2353-.42968-.65475-.67522-.40923-.24553-.94122-.24553-.54222 0-.96168.24553-.41945.24554-.65475.68545-.22508.42969-.22508.99237v.14323q0 .58314.25577 1.02306.25576.43992.72637.69568.47061.24554 1.07421.24554.49107 0 .9003-.16369.40922-.17392.70591-.52176l.4706.55245q-.35807.42968-.90029.65476-.54222.22507-1.19698.22507z" id="path3298"/>
                                </g>
                            </g>
                        </svg>        
                    </Box>
                    </Stack>
                <Stack
                    className='about-main-container'
                    direction='column'
                    width='90%'
                    height='100%'
                    justifyContent='flex-start'
                    alignItems='center'
                >
                    <Stack
                        className='about-main'
                        direction={{ sm: 'row', xxs: 'column' }}
                        width='90%'
                        height='100%'
                        justifyContent='center'
                        alignItems='center'
                        spacing={{ sm: '10.4vw', xsm: 0, xxs: 20 }}
                    >
                        <Stack
                            className='about-text'
                            direction='column'
                            width={{ sm: '50%', xs: '75%', xxs: '90%' }}
                            height={{ sm: '100%', xsm: '75%', xxs: '50%' }}
                            justifyContent='center'
                            alignItems='flex-start'
                            spacing={{ xxl: 100, m: 70, sm: 0, xxs: 50 }}
                            pr={{ sm: 50, xxs: 0 }}
                        >
                            <Stack
                                className='about-text-entry about-text-entry-1'
                                width='100%'
                                height={{ xsm: '15%', xxs: '17%' }}
                                sx={{
                                    position: 'relative',
                                    zIndex: -1
                                }}
                            >
                                <Typography className='about-text-content' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: -1, color: 'transparent', lineHeight: '160%'}}>I'm a passionate technology enthusiast who's always looking to learn something new. I love developing purposeful solutions to people's daily inconveniences.</Typography>
                                <Typography visibility='hidden' className='about-text-overlay' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0, background: '#A7BC5B', color: 'transparent', lineHeight: '160%'}}>I'm a passionate technology enthusiast who's always looking to learn something new. I love developing purposeful solutions to people's daily inconveniences.</Typography>                     
                            </Stack>
                            <Stack
                                className='about-text-entry'
                                width='100%'
                                height={{ xsm: '15%', xxs: '17%' }}
                                sx={{
                                    position: 'relative',
                                    zIndex: -1
                                }}
                            >
                                <Typography className='about-text-content' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: -1, color: 'transparent', lineHeight: '160%' }}>I'm currently focusing on front-end development, however my other areas of focus include full-stack development, UI/UX design, video game development and computer graphics.</Typography>
                                <Typography visibility='hidden' className='about-text-overlay' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0, background: '#A7BC5B', color: 'transparent', lineHeight: '160%' }}>I'm currently focusing on front-end development, however my other areas of focus include full-stack development, UI/UX design, video game development and computer graphics.</Typography>                     
                            </Stack>
                            <Stack
                                className='about-text-entry'
                                width='100%'
                                height={{ xsm: '15%', xxs: '17%' }}
                                sx={{
                                    position: 'relative',
                                    zIndex: -1
                                }}
                            >
                                <Typography className='about-text-content' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: -1, color: 'transparent', lineHeight: '160%' }}>I spend a lot of time working with Node, React and Express. I'm also experienced with Three.js, a 3D web computer graphics library and anime.js, an animation library.</Typography>
                                <Typography visibility='hidden' className='about-text-overlay' variant='text_main_anim' sx={{ position: 'absolute', top: 0, left: 0, zIndex: 0, background: '#A7BC5B', color: 'transparent', lineHeight: '160%' }}>I spend a lot of time working with Node, React and Express. I'm also experienced with Three.js, a 3D web computer graphics library and anime.js, an animation library.</Typography>                     
                            </Stack>
                        </Stack>

                        {/* <Box visibility='hidden' className='bamboo-model' component='div' sx={{ width: 513, height: 688, background: '#A7BC5B', color: '#A7BC5B' }}></Box> */}
                        <Bamboo />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default About