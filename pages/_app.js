import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from '../components/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
