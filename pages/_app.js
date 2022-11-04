import { useState } from 'react'
import { ThemeProvider, CssBaseline } from "@mui/material"
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider } from '@supabase/auth-helpers-react'
import theme from '../components/theme'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    // <SessionContextProvider
      // supabaseClient={supabaseClient}
      // initialSession={pageProps.initialSession}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    // </SessionContextProvider>
  )

}

export default MyApp
