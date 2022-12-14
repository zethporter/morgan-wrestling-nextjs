import Head from 'next/head'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

import Account from '../../components/admin/Account'
import Dashboard from '../../components/admin/Dashboard'

const Admin = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="p-1 min-h-screen bg-gradient-to-br from-maroon-500 to-maroon-700">
      <Head>
        <title>Morgan Wrestling | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container rounded-lg bg-white mx-auto mt-10 px-10">
        <p className="text-center pt-5 text-3xl text-maroon-700">Sign into your Morgan Wrestling Account</p>
        {/* {!session ? (
        <div className="w-2/3 mx-auto bg-transparent snap-center mt-10 rounded-lg" style={{ padding: '50px 0 100px 0' }}>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="light"
            />
        </div>
          ) : (
            <Account session={session} />
          )} */}
        <Dashboard />
      </div>
    </div>
  )
}

export default Admin;