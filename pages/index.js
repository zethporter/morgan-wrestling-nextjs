import Head from 'next/head'
import HomeContent from '../components/HomeContent'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Morgan Wrestling | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-1 min-h-screen bg-gradient-to-br from-maroon-500 to-maroon-700">
        <HomeContent />
      </div>
      <Footer />
    </div>
  )
}
