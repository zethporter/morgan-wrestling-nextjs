// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY})

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTIFICATIONS_DATABASE_ID
  });

  const pageId = response.results[0].id
  const propertyId = response.results[0].properties.Name.id
  const pageResponse = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyId
  });

  res.status(200).json({ response });
}


