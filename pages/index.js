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
  Box
} from '@mui/material'

import { useEffect, useRef } from 'react'
import EventEmitter from '../src/utils/EventEmitter'

export default function Home() {
  const theme = createTheme({
    spacing: 1,
    typography: {
      navbar_main: {
        color: '#000000',
        letterSpacing: '0.02em',
        fontSize: 25,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600'
      },
      navbar_alt: {
        color: '#A7BC5B',
        fontSize: 25,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600'
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
        fontSize: 30,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(','),
        fontWeight: '600'
      },
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
        aboutActive = false
      }

      if (projectsStackRect.top <= window.innerHeight * 0.5 && projectsActive) {
        projectsAnim()
        projectsActive = false
      }
    })

    mainAnim()
  })

  return ( 
    <ThemeProvider theme={theme}>
      <Head>
        <title>Thomas' Website</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Main />
      <About />
      <Projects />        
    </ThemeProvider>
  )
}
