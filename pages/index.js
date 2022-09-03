import Head from 'next/head'
import Image from 'next/image'
import { Box, Paper, Typography } from "@mui/material"
import HomeContent from '../components/HomeContent'
import Footer from '../components/footer'
import NavTabs from '../components/NavTabs'

export default function Home() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');
      </style>
      <Head>
        <title>Morgan Wrestling | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ m: 0 }}>
        <Paper elevation={8} sx={{ backgroundColor: "white", m: 0, pt: 1 }}>
          <HomeContent />
        </Paper>
      </Box>
      <Footer />
    </div>
  )
}
