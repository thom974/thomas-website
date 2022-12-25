import Navbar from "../src/components/Navbar"
import Intro from "../src/components/Intro"
import Panda from "../src/components/Panda"


import { useEffect } from 'react'

import { 
    Stack,
    Typography,
    Box,
    Divider
} from "@mui/material"

import { styled } from "@mui/system"
import anime from "animejs"

const Svg = styled('svg')({
    transition: '0.3s',
    fill:'#ffffff',
    '&:hover': {
        fill: '#ffffff',
    },
    pointerEvents: 'none'
})

const SvgDesc = styled('a')({
    color: '#000000',
    letterSpacing: '0.02em',
    fontSize: 20,
    fontFamily: [
        'Montserrat', 
        'sans-serif'
    ].join(','),
    fontWeight: '600',
    pointerEvents: 'none'
})

const SvgWrapper = styled('div')({
    display: 'inline-block',
    width: 'max-content',
    height: 'max-content',
    cursor: 'pointer'
})

const SvgLinkWrapper = styled('a')({
    display: 'block',
})

const Main = () => {
    useEffect(() => {
        // Add event listeners for logos (fill, show desc)
        const logos = document.querySelectorAll('.logo-container')
        
        logos.forEach(logoContainer => {
            const logo = logoContainer.querySelector('.logo')
            const logoWrapper = logoContainer.querySelector('.logo-wrapper')
            
            logoWrapper.addEventListener('mouseover', event => {
                // anime.remove(logo)
                // anime.remove(logoContainer.querySelector('.logo-desc'))
                anime({
                    targets: logo,
                    fill: "#ffffff",
                    easing: 'easeInCirc',
                    duration: 25
                })
                
                anime({
                    targets: logoContainer.querySelector('.logo-desc'),
                    opacity: 1,
                    duration: 1000
                
                })

                anime({
                    targets: logoContainer.querySelector('.logo-desc'),
                    translateX: ['+=-50%', 0],
                    easing: 'easeOutExpo',
                    duration: 500
                })
            })

            logoWrapper.addEventListener('mouseleave', event => {
                anime({
                    targets: logo,
                    fill: "#56642a",
                    easing: 'easeInCirc',
                    duration: 100
                })

                anime({
                    targets: logoContainer.querySelector('.logo-desc'),
                    translateX: '+=-50%',
                    easing: 'easeOutExpo',
                    duration: 500
                })

                anime({
                    targets: logoContainer.querySelector('.logo-desc'),
                    opacity: 0,
                    duration: 1000
                
                })
            })
        })
    })

    return (
        <Stack
            className='main-stack-container scroll-snap-child'
            id='home'
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
            height='100%'
            width='100%'
        >    
            <Navbar num='1' delay={0} />
            <Stack 
                direction='row' 
                alignItems='center' 
                justifyContent='center'
                height='90%'
                width='100%'
                className='main-stack'
            >
                <Stack
                    className='logo-bar'
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
                    <Stack
                        className='logo-container'
                        direction='row'
                        width='100%'
                        height='auto'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing='6%'
                    >
                        <SvgLinkWrapper href="https://www.linkedin.com/in/thomas-luc/" target="_blank">
                            <SvgWrapper className='logo-wrapper'>
                                <Svg className='logo' id='linkedin' width="46" height="46" viewBox="0 0 46 46">
                                    <path stroke="#56642A" fillRule="evenodd" clipRule="evenodd" d="M0.0833288 3.9125C0.0833288 2.89694 0.486758 1.92298 1.20487 1.20487C1.92297 0.486762 2.89694 0.0833334 3.9125 0.0833334H42.0833C42.5866 0.0825114 43.0851 0.180964 43.5503 0.373056C44.0155 0.565147 44.4382 0.847104 44.7943 1.20278C45.1503 1.55846 45.4327 1.98088 45.6253 2.44585C45.8179 2.91083 45.9169 3.40922 45.9167 3.9125V42.0833C45.9172 42.5867 45.8185 43.0853 45.6262 43.5505C45.4339 44.0156 45.1517 44.4384 44.7959 44.7944C44.44 45.1504 44.0175 45.4328 43.5524 45.6254C43.0873 45.818 42.5888 45.9169 42.0854 45.9167H3.9125C3.40947 45.9167 2.91137 45.8176 2.44666 45.625C1.98194 45.4324 1.55973 45.1502 1.20413 44.7944C0.848531 44.4386 0.56652 44.0162 0.374209 43.5514C0.181898 43.0866 0.0830551 42.5884 0.0833288 42.0854V3.9125ZM18.225 17.5583H24.4312V20.675C25.3271 18.8833 27.6187 17.2708 31.0625 17.2708C37.6646 17.2708 39.2292 20.8396 39.2292 27.3875V39.5167H32.5479V28.8792C32.5479 25.15 31.6521 23.0458 29.3771 23.0458C26.2208 23.0458 24.9083 25.3146 24.9083 28.8792V39.5167H18.225V17.5583ZM6.76666 39.2312H13.45V17.2708H6.76666V39.2292V39.2312ZM14.4062 10.1083C14.4188 10.6806 14.317 11.2496 14.1067 11.7819C13.8965 12.3143 13.582 12.7992 13.1817 13.2084C12.7815 13.6176 12.3035 13.9427 11.7759 14.1646C11.2484 14.3865 10.6817 14.5009 10.1094 14.5009C9.537 14.5009 8.97039 14.3865 8.4428 14.1646C7.91521 13.9427 7.43726 13.6176 7.03701 13.2084C6.63676 12.7992 6.32227 12.3143 6.112 11.7819C5.90172 11.2496 5.79989 10.6806 5.8125 10.1083C5.83723 8.98511 6.3008 7.91623 7.10392 7.1306C7.90705 6.34496 8.98588 5.90504 10.1094 5.90504C11.2329 5.90504 12.3117 6.34496 13.1148 7.1306C13.9179 7.91623 14.3815 8.98511 14.4062 10.1083V10.1083Z"/>
                                </Svg>
                            </SvgWrapper>
                        </SvgLinkWrapper>
                        <SvgDesc className='logo-desc'>linkedin</SvgDesc>
                    </Stack>
                    <Stack
                        className='logo-container'
                        direction='row'
                        width='100%'
                        height='auto'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing='8%'
                    >
                        <SvgLinkWrapper href="https://github.com/thom974" target="_blank">
                            <SvgWrapper className='logo-wrapper'>
                                <Svg className='logo' id='github' width="50" height="49" viewBox="0 0 50 49">
                                    <path stroke="#56642A" fillRule="evenodd" clipRule="evenodd" d="M25 0C11.1875 0 0 11.1875 0 25C0 36.0625 7.15625 45.4063 17.0937 48.7188C18.3437 48.9375 18.8125 48.1875 18.8125 47.5313C18.8125 46.9375 18.7812 44.9688 18.7812 42.875C12.5 44.0313 10.875 41.3438 10.375 39.9375C10.0937 39.2188 8.875 37 7.8125 36.4063C6.9375 35.9375 5.6875 34.7813 7.78125 34.75C9.75 34.7188 11.1562 36.5625 11.625 37.3125C13.875 41.0938 17.4687 40.0313 18.9062 39.375C19.125 37.75 19.7812 36.6563 20.5 36.0313C14.9375 35.4063 9.125 33.25 9.125 23.6875C9.125 20.9688 10.0937 18.7188 11.6875 16.9688C11.4375 16.3438 10.5625 13.7813 11.9375 10.3438C11.9375 10.3438 14.0312 9.6875 18.8125 12.9063C20.8125 12.3438 22.9375 12.0625 25.0625 12.0625C27.1875 12.0625 29.3125 12.3438 31.3125 12.9063C36.0937 9.65625 38.1875 10.3438 38.1875 10.3438C39.5625 13.7813 38.6875 16.3438 38.4375 16.9688C40.0313 18.7188 41 20.9375 41 23.6875C41 33.2813 35.1562 35.4063 29.5937 36.0313C30.5 36.8125 31.2812 38.3125 31.2812 40.6563C31.2812 44 31.25 46.6875 31.25 47.5313C31.25 48.1875 31.7187 48.9688 32.9687 48.7188C37.9316 47.0432 42.2441 43.8535 45.2993 39.5987C48.3545 35.3439 49.9985 30.2381 50 25C50 11.1875 38.8125 0 25 0Z" />
                                </Svg>
                            </SvgWrapper>
                        </SvgLinkWrapper>
                        <SvgDesc className='logo-desc'>github</SvgDesc>
                    </Stack>    
                    <Stack
                        className='logo-container'
                        direction='row'
                        width='100%'
                        height='auto'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing='8%'
                    >
                        <SvgLinkWrapper href="/thomaslucresume.pdf" target="_blank">
                            <SvgWrapper className='logo-wrapper'>
                                <Svg className='logo' id='resume' width="46" height="40" viewBox="0 0 46 40">
                                    <path stroke="#56642A" d="M37.3183 22.0733L24.1667 35.2033V39.6667H28.63L41.76 26.515L37.3183 22.0733ZM45.1833 21.4233L42.41 18.65C42.3058 18.5349 42.1788 18.4427 42.037 18.3793C41.8953 18.3159 41.7419 18.2826 41.5867 18.2817C41.2617 18.3033 40.9583 18.4117 40.7417 18.65L38.575 20.8167L43.0167 25.15L45.1833 22.9833C45.595 22.55 45.595 21.8567 45.1833 21.4233ZM19.8333 31H4.66666V9.33333L22 20.1667L39.3333 9.33333V13.6667H43.6667V5C43.6667 2.61666 41.7167 0.666664 39.3333 0.666664H4.66666C2.28333 0.666664 0.333328 2.61666 0.333328 5V31C0.333328 33.3833 2.28333 35.3333 4.66666 35.3333H19.8333V31ZM39.3333 5L22 15.8333L4.66666 5H39.3333Z" />
                                </Svg>
                            </SvgWrapper>
                        </SvgLinkWrapper>
                        <SvgDesc className='logo-desc'>resume</SvgDesc>
                    </Stack>

                    <svg 
                        className='intro-line-svg'
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
                    spacing={0}
                    width='50%'
                    height='inherit'
                >
                    <Intro />
                    <Panda />
                </Stack>

                <Stack
                    className='scroll-bar'
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
                        className='intro-line-svg-anim'
                        height='50%'
                        width='46px'
                        viewBox='0 0 2 400'
                        visibility='hidden'
                    >
                        <path stroke='#56642A' strokeWidth={2} d='M0 400 V 0' />
                    </svg>
                    {/* <Typography
                        variant="navbar_main"
                        className='vertical_rl'
                        sx={{ color: '#56642A'}}
                    >
                        scroll down
                    </Typography> */}
                    <svg className="intro-scroll-svg" width="24.90002" height="186.40873" viewBox="0 0 6.58813 49.32064" visibility='hidden'>
                        <g className="layer-one" transform="translate(-95.756 -90.3165)">
                            <g className="text682" fill='none' stroke="#56642a" strokeWidth=".26458" aria-label="scroll down" transform="rotate(90 99.05007 114.97683)">
                                <path id="path2859" d="M76.2771 118.27088q-.57326 0-1.08479-.15875-.51153-.16757-.80257-.41451l.28223-.49389q.28222.21167.72319.37042.44097.14993.92604.14993.66146 0 .9525-.20285.29104-.21167.29104-.55563 0-.25576-.16757-.39687-.15875-.14993-.42333-.22049-.26458-.0794-.5909-.13229-.32632-.0529-.65264-.12347-.3175-.0706-.58208-.20285-.26459-.14111-.43216-.37923-.15875-.23813-.15875-.635 0-.37924.21167-.6791t.61736-.46743q.41451-.17639 1.00542-.17639.44979 0 .89958.12347.4498.11466.74083.30868l-.2734.50271q-.30868-.21167-.66146-.29986-.35278-.097-.70555-.097-.62618 0-.92604.22048-.29105.21167-.29105.54681 0 .26458.15875.41451.16757.14993.43216.23813.2734.0794.5909.13229.32632.0529.64382.13229.32632.0705.5909.20285.2734.12347.43215.36159.16757.22931.16757.60854 0 .4057-.2293.70556-.22049.29104-.65264.45861-.42333.15875-1.03188.15875z"/>
                                <path id="path2861" d="M81.2601 118.27088q-.68792 0-1.23473-.29986-.53798-.30868-.84666-.83785-.30868-.53798-.30868-1.2259 0-.69673.30868-1.2259t.84666-.82903q.5468-.29986 1.23473-.29986.5909 0 1.06715.22931.47625.2293.74965.68791l-.46743.3175q-.23813-.35278-.5909-.52034-.35278-.16757-.7673-.16757-.49388 0-.89076.2293-.39687.22049-.62618.62618-.2293.4057-.2293.9525 0 .54681.2293.9525t.62618.635q.39688.22049.89077.22049.41451 0 .76729-.16757.35278-.16757.5909-.51153l.46743.3175q-.2734.44979-.74965.68792-.47625.2293-1.06715.2293z"/>
                                <path id="path2863" d="M84.3028 118.22678v-4.6302h.59972v1.26118l-.06174-.22049q.19403-.52916.65264-.80257.45861-.28222 1.1377-.28222v.60854h-.07055q-.03528-.009-.07055-.009-.73201 0-1.14653.44979-.41451.44098-.41451 1.26118v2.36361z"/>
                                <path id="path2865" d="M89.61445 118.27088q-.67028 0-1.20827-.29986-.52917-.30868-.83785-.83785-.30868-.53798-.30868-1.2259 0-.69673.30869-1.2259.30868-.52917.83784-.82903.52917-.29986 1.20827-.29986.68791 0 1.21708.29986.53798.29986.83784.82903.30869.52917.30869 1.2259 0 .68792-.30869 1.2259-.29986.52917-.83784.83785-.53799.29986-1.21708.29986zm0-.55562q.5027 0 .89076-.22049.38805-.22931.60854-.635.2293-.41451.2293-.9525 0-.5468-.2293-.9525-.22049-.40569-.60854-.62618-.38806-.2293-.88195-.2293-.49388 0-.88194.2293-.38805.22049-.61736.62618-.2293.4057-.2293.9525 0 .53799.2293.9525.2293.40569.61736.635.38806.22049.87313.22049z"/>
                                <path id="path2867" d="M93.25688 118.22678v-6.54402h.62618v6.54402z"/>
                                <path id="path2869" d="M95.6293 118.22678v-6.54402h.62618v6.54402z"/>
                                <path id="path2871" d="M102.15567 118.27088q-.66146 0-1.19062-.29986-.52035-.29986-.82021-.82903-.29986-.53798-.29986-1.23472 0-.70555.29986-1.23472t.82021-.82021q.52916-.29986 1.19062-.29986.60854 0 1.08479.2734.48507.27341.7673.80257.29104.52035.29104 1.27882 0 .74965-.28223 1.27882-.28222.52917-.76729.81139-.47625.2734-1.09361.2734zm.0441-.55562q.49389 0 .88194-.22049.39688-.22931.61736-.635.22931-.41451.22931-.9525 0-.5468-.22931-.9525-.22048-.40569-.61736-.62618-.38805-.2293-.88194-.2293-.48507 0-.87312.2293-.38806.22049-.61737.62618-.2293.4057-.2293.9525 0 .53799.2293.9525.22931.40569.61737.635.38805.22049.87312.22049zm1.74625.51152v-1.39347l.0617-.93486-.0882-.93486v-3.28083h.62618v6.54402z"/>
                                <path id="path2873" d="M108.17935 118.27088q-.67028 0-1.20827-.29986-.52916-.30868-.83784-.83785-.30868-.53798-.30868-1.2259 0-.69673.30868-1.2259t.83784-.82903q.52917-.29986 1.20827-.29986.68791 0 1.21708.29986.53798.29986.83785.82903.30868.52917.30868 1.2259 0 .68792-.30868 1.2259-.29987.52917-.83785.83785-.53799.29986-1.21708.29986zm0-.55562q.5027 0 .89076-.22049.38805-.22931.60854-.635.22931-.41451.22931-.9525 0-.5468-.22931-.9525-.22049-.40569-.60854-.62618-.38806-.2293-.88194-.2293-.49389 0-.88195.2293-.38805.22049-.61736.62618-.2293.4057-.2293.9525 0 .53799.2293.9525.22931.40569.61736.635.38806.22049.87313.22049z"/>
                                <path id="path2875" d="m112.63318 118.22678-1.74625-4.6302h.59972l1.5875 4.29507h-.2734l1.63159-4.29507h.53799l1.61396 4.29507h-.27341l1.61396-4.29507h.57326l-1.75506 4.6302h-.59091l-1.55222-4.0393h.18521l-1.56104 4.0393z"/>
                                <path id="path2877" d="M121.80539 113.55248q.56445 0 .98778.22049.43215.21166.67028.65264.24694.44097.24694 1.11124v2.68993h-.62618v-2.62819q0-.73201-.37042-1.10243-.36159-.37924-1.02305-.37924-.49389 0-.86431.20285-.36159.19403-.56444.57327-.19403.37041-.19403.89958v2.43416h-.62618v-4.6302h.59972v1.27l-.097-.23813q.22049-.50271.70555-.78493.48507-.29104 1.15535-.29104z"/>
                            </g>
                        </g>
                    </svg>

                </Stack>
            </Stack>
        </Stack>
    )
}

export default Main