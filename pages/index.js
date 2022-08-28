import Head from 'next/head'
import Image from 'next/image'
import { Box, Paper, Typography} from "@mui/material"
import HomeContent from '../components/HomeContent'
import Footer from '../components/footer'
import NavTabs from '../components/NavTabs'

import { Client } from '@notionhq/client'


export default function Home({announcements}) {
  console.log(announcements)
  return (
    <div>
      <Head>
        <title>Morgan Wrestling | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ m: 0 }}>
        <NavTabs tab={0} />
        <Paper elevation={8} sx={{ backgroundColor: "backgrounds.main", m: 0, pt: 1 }}>
          <HomeContent Announcements={announcements} />
        </Paper>
        {/* <Typography>{anouncements.Announcement.id}</Typography> */}
      </Box>
      <Footer />
    </div>
  )
}

const property = async (record) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY})
  const pageId = record.id
  const announcement = {}

  const content = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: record.properties.Announcement.id
  });

  const date = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: record.properties.Date.id
  });

  const link = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: record.properties.Link.id
  });

  const importance = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: record.properties.Importance.id
  });

  const name = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: record.properties.Name.id
  });

    announcement.id = record.id
    announcement.createdTime = record.created_time
    announcement.lastEdited = record.last_edited_time
    announcement.cover = record.cover
    announcement.icon = record.icon
    announcement.content = content.results[0] ? content.results[0].rich_text.text.content : null
    announcement.date = date.date ? date.date.start : null
    announcement.link = link.url ? link.url : null
    announcement.importance = importance.select ? importance.select.name : null
    announcement.importanceColor = importance.select ? importance.select.color : null
    announcement.name = name.results[0] ? name.results[0].title.text.content : null

  return announcement
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY})
  const database = await notion.databases.query({
    database_id: process.env.NOTIFICATIONS_DATABASE_ID
  });

  // const pageId = database.results[0].properties
  const announcements = []

  for (let i = 0; i < database.results.length; i++) {
    announcements.push(await property(database.results[i]))
  }

  return {
    props: {
      announcements: announcements
    }
  };
}
