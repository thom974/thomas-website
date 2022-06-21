import Head from 'next/head'
import Main from './main'
import About from './about'
import Projects from './projects'

import { 
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider, 
  Typography,
  Box
} from '@mui/material'

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
      }
    },
    components: {
      
    }
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
