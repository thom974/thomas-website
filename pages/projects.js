import { Stack, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useEffect } from "react"
import anime from "animejs"

// Custom styled components for projects list.
const PList = styled('ol')({
    listStyleType: 'none',
    position: 'relative',
    color: '#A7BC5B',
    fontSize: 50,
    fontFamily: [
        'Archivo', 
        'sans-serif'
    ].join(','),
    fontWeight: '600',
    letterSpacing: '0.06em',
    paddingLeft: '0',
    counterReset: 'my-counter'
})

const PItem = styled('li')({
    position: 'relative',
    paddingTop: '10%',
    paddingBottom: '10%',
    '&::before': {
        fontWeight: '400',
        fontSize: '16px',
        fontFamily: [
            'Archivo', 
            'sans-serif'
        ].join(','),
        counterIncrement: 'my-counter 1',
        content: '"0"counter(my-counter)',
        color: '#56642A',
        position: 'absolute',
        transformOrigin: '100% 100%',
        transform: 'translateY(-50%) rotate(-90deg)',
        top: '27%',
        right: 'calc(100% + 25px)',
    },
})

const PItemContent = styled('a')({
    display: 'inline-block',
    position: 'relative',
    transition: '0.3s',
    '&:hover': {
        'WebkitTextFillColor' : 'transparent',
        'WebkitTextStroke': '#56642A',
        'WebkitTextStrokeWidth' : '0.01px',
        transform: 'translateX(20%)'
    }
})

const PItemDesc = styled('a')({
    display: 'inline-block',
    position: 'relative',
    color: '#56642A',
    fontSize: 20,
    fontFamily: [
        'Montserrat', 
        'sans-serif'
      ].join(','),
    fontWeight: '600',
})

const Projects = () => {
    useEffect(() => {
        // Add event listeners to project entries
        document.querySelectorAll('.project-entry-box').forEach(entry => {
            entry.addEventListener('mouseover', event => {
                const overlay = document.querySelector('.project-preview-overlay')
                overlay.style.transition = '0.4s'
                overlay.style.transform = 'translateX(100%)'
                overlay.currentProject = event.fromElement.id
            })
            
            entry.addEventListener('mouseout', event => {
                const overlay = document.querySelector('.project-preview-overlay')
                overlay.style.transition = '0.3s'
                overlay.style.transform = 'translateX(0)'
            })
        })

        // Add event listeners to project overlay
        const overlay = document.querySelector('.project-preview-overlay')
        overlay.addEventListener('webkitTransitionEnd', event => {
            // User hovering over project entry
            if (event.elapsedTime == 0.4) {
                // Handle content display for each project
                const id = overlay.currentProject

                if (id == "01") {
                    const desc = document.querySelector('.project-entry-desc#desc1')

                    if (desc.style.visibility == 'hidden') {
                        anime({
                            targets: desc,
                            translateX: ["+=-50vw", 0],
                            easing: 'easeOutExpo',
                            duration: 500,
                            begin: (anim) => {
                                desc.style.transition = 0
                                desc.style.visibility = 'visible'
                            }
                        })
                    }
                    overlay.style.backgroundColor = "#FF0000"
                } else if (id == "02") {
                    const desc = document.querySelector('.project-entry-desc#desc2')

                    if (desc.style.visibility == 'hidden') {
                        anime({
                            targets: desc,
                            translateX: ["+=-50vw", 0],
                            easing: 'easeOutExpo',
                            duration: 500,
                            begin: (anim) => {
                                desc.style.transition = 0
                                desc.style.visibility = 'visible'
                            }
                        })
                    }
                    overlay.style.backgroundColor = "#00FF00"
                } else if (id == "03") {
                    const desc = document.querySelector('.project-entry-desc#desc3')
                    
                    if (desc.style.visibility == 'hidden') {
                        anime({
                            targets: desc,
                            translateX: ["+=-50vw", 0],
                            easing: 'easeOutExpo',
                            duration: 500,
                            begin: (anim) => {
                                desc.style.transition = 0
                                desc.style.visibility = 'visible'
                            }
                        })
                    }
                    overlay.style.backgroundColor = "#0000FF"
                } else {
                    const desc = document.querySelector('.project-entry-desc#desc4')
                    
                    if (desc.style.visibility == 'hidden') {
                        anime({
                            targets: desc,
                            translateX: ["+=-50vw", 0],
                            easing: 'easeOutExpo',
                            duration: 500,
                            begin: (anim) => {
                                desc.style.transition = 0
                                desc.style.visibility = 'visible'
                            }
                        })
                    }
                    overlay.style.backgroundColor = "#000000"
                }
                
                // Move overlay back in after changing contents
                overlay.style.transform = 'translateX(0)'
            }
        })

        // Add animations to project entry descriptions and modify them
        document.querySelectorAll('.project-entry-desc').forEach(entry => {
            entry.style.visibility = 'hidden'
        })
    })

    return (
        <Stack
            width='100%'
            height='100%'
            justifyContent='flex-start'
            className='scroll-snap-child projects-stack'
            direction='row'
        >
            <Stack
                className='projects-sidebar'
                width='10%'
                height='100%'
                direction='column'
                justifyContent='center'
                alignItems='flex-start'
                spacing={36}
                pl={53}
                pr={53}
                pb={53}
            >
               <svg 
                    className='projects-line-svg-anim'
                    height='50%'
                    width='46px'
                    viewBox='0 0 2 400'
                    visibility='hidden'
                >
                    <path stroke='#56642A' strokeWidth={2} d='M0 400 V 0' />
                </svg>
               
                <svg 
                    className='projects-sidebar-svg'
                    width="46.079926" 
                    height="273.50507" 
                    viewBox="0 0 12.19198 72.364881"
                    visibility='hidden'
                >
                    <g strokeWidth=".264583" fontFamily="Montserrat">
                        <g aria-label="1" fontSize="8.81944" opacity=".289">
                            <g className='projects-sidebar-numbers' fill="none" stroke="#56642a" strokeWidth=".200042" aria-label="2" fontSize="16.9333">
                                <path d="M9e-8 4.9445326q0-1.40547.7112-2.54.7112-1.1176 2.06586-1.76106 1.3716-.64347 3.31893-.64347t3.30199.64347q1.3716.64346 2.0828 1.76106.7112 1.13453.7112 2.54 0 1.42239-.7112 2.53999t-2.0828 1.76106q-1.35466.6604-3.30199.6604t-3.31893-.6604q-1.35466-.64346-2.06586-1.76106-.7112-1.1176-.7112-2.53999zm1.91346 0q0 .82973.44027 1.43933.4572.60959 1.38853.94826.93133.3556 2.35373.3556 1.43933 0 2.35373-.3556.93133-.33867 1.37159-.94826.4572-.6096.4572-1.43933 0-.79587-.4572-1.4224-.44026-.6096-1.37159-.9652-.9144-.33867-2.35373-.33867-1.4224 0-2.35373.33867-.93133.3556-1.38853.9652-.44027.62653-.44027 1.4224z"/>
                                <path d="M.16933009 11.2218226h1.4732l4.47039 4.70746q.5588.59266.98213.88053.42334.28787.77893.37253.37254.1016.69427.1016.8128 0 1.25306-.5588.4572-.5588.4572-1.64253 0-.8636-.3048-1.57479-.3048-.69427-.93133-1.20227l1.18533-1.54093q.93134.69427 1.43933 1.86266.52494 1.18534.52494 2.6416 0 1.28693-.42334 2.2352-.4064.96519-1.16839 1.47319-.762.52493-1.81187.52493-.57573 0-1.15146-.1524-.5588-.15239-1.18533-.57573-.62653-.42333-1.40547-1.23613l-3.84386-4.04706.82974-.4572v6.92572h-1.86267z"/>
                            </g>
                        </g>
                        <g className='projects-sidebar-letters' fill="none" stroke='#56642A' strokeWidth=".200042" strokeOpacity=".286275" aria-label="my projects" fontSize="9.87778" >
                            <path d="M124.98418-122.96687q.63218 0 1.11619.24694.49389.24694.77047.76059.27657.50377.27657 1.30387v3.0226h-1.22484v-2.86456q0-.70132-.31609-1.04704-.30621-.34573-.87912-.34573-.40499 0-.72108.1778-.30621.1778-.48401.52353-.16792.34572-.16792.87912v2.67688h-1.22485v-2.86456q0-.70132-.31609-1.04704-.30621-.34573-.87912-.34573-.40499 0-.72108.1778-.30621.1778-.48401.52353-.16792.34572-.16792.87912v2.67688h-1.23472v-5.27474h1.17545v1.40265l-.20743-.41487q.2667-.51364.77047-.78034.51364-.2667 1.16557-.2667.74084 0 1.28412.36547.55315.36548.73095 1.10631l-.48401-.16792q.25682-.59266.84949-.94826t1.37301-.3556z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M129.0637-115.64744q-.38524 0-.77047-.12841-.38523-.12841-.64206-.3556l.49389-.90876q.1778.1778.41487.2667.24694.0988.49389.0988.32596 0 .5334-.16792.21731-.16792.39511-.56303l.30621-.69145.0988-.14817 1.99531-4.66231h1.18533l-2.46944 5.69948q-.24695.59267-.55316.93839-.29633.34572-.67169.48401-.36547.13829-.80997.13829zm1.08655-1.79776-2.38054-5.46241h1.27423l1.94592 4.55366z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M139.9885-117.56373q-.64205 0-1.17545-.29633-.52353-.29634-.83961-.889-.30622-.60255-.30622-1.52118 0-.92851.29634-1.52118.29633-.59267.81985-.87912.5334-.29633 1.20509-.29633.77047 0 1.37301.33584.60255.33584.94827.93839.34572.60254.34572 1.4224 0 .81985-.34572 1.43228-.34572.60254-.94827.93839-.60254.33584-1.37301.33584zm-2.92382 1.84715v-7.19103h1.17546v1.2446l-.0395 1.40265.0988 1.39276v3.15102zm2.78553-2.90407q.4445 0 .79023-.19756.3556-.19755.56303-.57291.20743-.37535.20743-.87912 0-.51365-.20743-.87912-.20743-.37536-.56303-.57291-.34573-.19756-.79023-.19756t-.8001.19756q-.3556.19755-.56303.57291-.20743.36547-.20743.87912 0 .50377.20743.87912.20743.37536.56303.57291.3556.19756.8001.19756z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M143.84084-117.63287v-5.27474h1.17546v1.45204l-.13829-.42475q.22719-.5334.74083-.80998.51365-.27657 1.26436-.27657v1.16557q-.079-.01-.14817-.01-.0593-.01-.12841-.01-.70132 0-1.11619.41486-.41486.40499-.41486 1.21497v2.55835z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M150.25904-117.56373q-.80997 0-1.44215-.34572-.63218-.3556-.99766-.96802-.36547-.61243-.36547-1.39277 0-.79022.36547-1.39277.36548-.61242.99766-.95814t1.44215-.34572q.81986 0 1.45204.34572.64205.34572.99765.94826.36548.60255.36548 1.40265 0 .78034-.36548 1.39277-.3556.61242-.99765.96802-.63218.34572-1.45204.34572zm0-1.05692q.45438 0 .80998-.19756.3556-.19755.55316-.57291.20743-.37535.20743-.87912 0-.51365-.20743-.87912-.19756-.37536-.55316-.57291-.3556-.19756-.8001-.19756-.45438 0-.80998.19756-.34572.19755-.55315.57291-.20743.36547-.20743.87912 0 .50377.20743.87912.20743.37536.55315.57291.3556.19756.8001.19756z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M153.71627-115.64744q-.34572 0-.65193-.079-.31609-.0691-.5334-.22719l.3556-.91863q.28646.20743.72108.20743.33584 0 .52352-.21731.18768-.20744.18768-.6223v-5.40315h1.22484v5.37351q0 .86925-.47413 1.37302-.47413.51364-1.35326.51364zm1.21497-8.12941q-.34572 0-.57291-.21731-.21731-.21731-.21731-.52353 0-.31609.21731-.52352.22719-.21731.57291-.21731t.56303.20743q.22719.19756.22719.50377 0 .32597-.21731.55316-.21731.21731-.57291.21731z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M159.65282-117.56373q-.87912 0-1.54094-.34572-.65193-.3556-1.01741-.96802-.3556-.61243-.3556-1.39277 0-.79022.34573-1.39277.3556-.61242.96802-.95814.6223-.34572 1.41252-.34572.77047 0 1.37301.33584.60255.33584.94827.94827.34572.61242.34572 1.44215 0 .079-.01.1778 0 .0988-.01.18768h-4.39562v-.81986h3.74368l-.48401.25683q.01-.45438-.18768-.8001-.19755-.34573-.54327-.54328-.33585-.19756-.78035-.19756-.45438 0-.8001.19756-.33584.19755-.5334.55315-.18768.34573-.18768.81986v.19756q0 .47413.21731.83961.21731.36548.61243.57291.39511.19755.90875.19755.4445 0 .8001-.13828.3556-.14817.63218-.4445l.66181.76058q-.3556.41487-.89888.64206-.5334.21731-1.22484.21731z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M165.73753-117.56373q-.82973 0-1.48167-.34572-.64205-.3556-1.00753-.96802-.36548-.61243-.36548-1.39277 0-.79022.36548-1.39277.36548-.61242 1.00753-.95814.65194-.34572 1.48167-.34572.77047 0 1.35326.31608.59266.30622.889.90876l-.93839.55316q-.23707-.37536-.58279-.55316-.33585-.1778-.73096-.1778-.45438 0-.81985.19756-.36548.19755-.57291.57291-.20744.36547-.20744.87912 0 .51364.20744.889.20743.36548.57291.56303.36547.19756.81985.19756.39511 0 .73096-.16792.34572-.1778.58279-.56304l.93839.55316q-.29634.59267-.889.91863-.58279.31609-1.35326.31609z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M171.11479-117.56373q-.86925 0-1.34338-.4445-.47414-.45438-.47414-1.3335v-4.73146h1.22485v4.70183q0 .38523.19755.59266.19756.19756.54328.19756.40499 0 .69145-.20743l.34572.86924q-.21731.1778-.54328.2667-.31609.0889-.64205.0889zm-2.68676-4.32647v-.9779h3.51649v.9779z" transform="rotate(90 -4.55386 -109.51689)"/>
                            <path d="M174.94736-117.56373q-.66181 0-1.27423-.16792-.60255-.1778-.95815-.42475l.47414-.93838q.3556.22718.84949.37535.49388.14817.98777.14817.58279 0 .83961-.15805.2667-.15804.2667-.42474 0-.21731-.1778-.32597-.1778-.11853-.46425-.1778-.28646-.0593-.64206-.10865-.34572-.0494-.70132-.12842-.34572-.0889-.63218-.24694-.28645-.16792-.46425-.4445t-.1778-.73096q0-.50376.28645-.86924.28646-.37536.8001-.57291.52353-.20743 1.23473-.20743.5334 0 1.07667.11853.54328.11853.89888.33584l-.47413.93839q-.37536-.22719-.76059-.30621-.37536-.0889-.75071-.0889-.56304 0-.83961.16792-.2667.16793-.2667.42475 0 .23706.1778.3556.1778.11853.46425.18768.28646.0691.63218.11853.3556.0494.70132.13829.34572.079.63218.23706.29633.14817.46426.42475.1778.27658.1778.72108 0 .49389-.28646.85936-.28646.36548-.81986.57292-.5334.19755-1.27423.19755z" transform="rotate(90 -4.55386 -109.51689)"/>
                        </g>
                    </g>
                </svg>
            </Stack>
            <Stack
                width='90%'
                height='100%'
                direction='row'
                justifyContent='flex-start'
                spacing='15%'
            >
                {/* Project listing stack */}
                <Stack
                    width='40%'
                    height='100%'
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <PList 
                        className='projects-entries'
                        visibility='hidden'
                    >
                        <PItem className='project-entry' id='01'>
                            <PItemContent className='project-entry-box'>The Green Reaper</PItemContent>
                            <br></br>
                            <PItemDesc className='project-entry-desc' id="desc1">Python, Pygame</PItemDesc> 
                        </PItem>
                        <PItem className='project-entry' id='02'>
                            <PItemContent className='project-entry-box'>Room Designer Bot</PItemContent>
                            <br></br>
                            <PItemDesc className='project-entry-desc' id="desc2">Three.js, Express.js, PostgreSQL, Blender </PItemDesc>
                        </PItem>
                        <PItem className='project-entry' id='03'>
                            <PItemContent className='project-entry-box'>Hackathon Website</PItemContent>
                            <br></br>
                            <PItemDesc className='project-entry-desc' id="desc3">React.js, Three.js, GSAP, Blender</PItemDesc>
                        </PItem>
                        <PItem className='project-entry' id='04'>
                            <PItemContent className='project-entry-box'>osu! Beatmap Gen</PItemContent>
                            <br></br>
                            <PItemDesc className='project-entry-desc' id="desc4">Python, Pygame, Selenium</PItemDesc>
                        </PItem>
                    </PList>
                </Stack>

                {/* Project preview stack */}
                {/* Will hold video */}
                <Stack
                    width='45%'
                    height='100%'
                    direction='column'
                    justifyContent='center'
                >
                    <Stack
                        visibility='hidden'
                        className='project-preview-overlay'
                        width='100%'
                        height='75%'
                        backgroundColor='#A7BC5B'
                    >

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Projects