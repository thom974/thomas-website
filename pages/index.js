import Head from 'next/head'
import Main from './main'

import { 
  createTheme,
  CssBaseline,
  ThemeProvider } from '@mui/material'

export default function Home() {
  const theme = createTheme({
    typography: {
      navbar_main: {
        color: '#000000',
        fontSize: 29,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(',')
      },
      navbar_alt: {
        color: '#A7BC5B',
        fontSize: 29,
        fontFamily: [
          'Montserrat', 
          'sans-serif'
        ].join(',')
      },
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
    </ThemeProvider>
  )
}
