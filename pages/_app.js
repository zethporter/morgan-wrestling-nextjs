
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    // <SessionContextProvider
    // supabaseClient={supabaseClient}
    // initialSession={pageProps.initialSession}>
    <Component {...pageProps} />
    // </SessionContextProvider>
  )

}

export default MyApp
