import Head from 'next/head'
import Main from './main'
import About from './about'
import Projects from './projects'

import aboutAnim from '../src/utils/aboutAnim'
import mainAnim from '../src/utils/mainAnim'
import projectsAnim from '../src/utils/projectsAnim'

import { 
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider, 
  Typography,
  Box,
  responsiveFontSizes
} from '@mui/material'

import { useEffect, useRef } from 'react'
import EventEmitter from '../src/utils/EventEmitter'

export default function Home() {
  let theme = createTheme({
    spacing: 1,
    breakpoints: {
      values: {
        xxl: 1920,
        xl: 1600,
        l: 1400,
        m: 1100,
        sm: 850,
        xs: 600,
        xsm: 400,
        xxsm: 350,
        xxs: 0
      }
    },
    typography: {
      navbar_main: {
        color: '#000000',
        letterSpacing: '0.02em',
        fontSize: 25,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600',
        '@media (max-width:1100px)': {
          fontSize: 20
        },
        '@media (max-height:849px)': {
          fontSize: 20
        }
      },
      navbar_alt: {
        color: '#A7BC5B',
        fontSize: 25,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600',
        '@media (max-width:1100px)': {
          fontSize: 20
        },
        '@media (max-height:849px)': {
          fontSize: 20
        }
      },
      title: {
        color: '#A7BC5B',
        letterSpacing: '0.08em',
        fontSize: 100,
        fontFamily: [
          'Archivo', 
          'sans-serif'
        ].join(','),
        fontWeight: '600',
      },
      subheading: {
        color: '#000000',
        fontSize: 25,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600'
      },
      text_main_anim: {
        color: '#000000',
        background: '#ffffff',
        letterSpacing: '0.02em',
        fontSize: '1.2vw',
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600',
        '@media (max-width:850px)': {
          fontSize: '2vw'
        },
        '@media (max-width:600px)': {
          fontSize: '2.5vw'
        },
        '@media (max-width:400px)': {
          fontSize: '3vw'
        }
      }
    },
    components: {
      
    }
  })

  let aboutActive = true
  let projectsActive = true

  useEffect(() => {
    const div = document.querySelector('#__next')
    
    div.addEventListener('scroll' , () => {
      /**
       * CHECK IF SECTIONS ARE VISIBLE, THEN PLAY ANIMATION
       */

      const aboutStack = document.querySelector('.about-stack')
      const aboutStackRect = aboutStack.getBoundingClientRect()

      const projectsStack = document.querySelector('.projects-stack')
      const projectsStackRect = projectsStack.getBoundingClientRect() 

      if (aboutStackRect.top <= window.innerHeight * 0.5 && aboutActive) {
        aboutAnim()
        window.dispatchEvent(new Event('navbar-2'))
        aboutActive = false
      }

      if (projectsStackRect.top <= window.innerHeight * 0.5 && projectsActive) {
        setTimeout(projectsAnim, 300)
        window.dispatchEvent(new Event('navbar-3'))
        projectsActive = false
      }
    })

    mainAnim()
    window.dispatchEvent(new Event('navbar-1'))
  })

  return ( 
    <ThemeProvider theme={theme}>
      <Head>
        <title>Thomas' Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        {/* <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" /> */}
      </Head>
      <Main />
      <About />
      <Projects />        
    </ThemeProvider>
  )
}
