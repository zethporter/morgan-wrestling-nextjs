// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY})

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTIFICATIONS_DATABASE_ID
  });

  const announcements = []

  for (let i = 0; i < response.results.length; i++) {
    announcements.push(await property(response.results[i]))
  }

  res.status(200).json({ announcements });
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
