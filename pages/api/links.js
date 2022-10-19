import path from 'path';
import { promises as fs } from 'fs';
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  // const calendarDirectory = path.join(process.cwd(", 'data";
  // const calendarItems = await fs.readFile(calendarDirectory + '/calendarItems.json', 'utf8"
  try {
    const client = await clientPromise;
    const db = client.db("mws");

    const links = await db
      .collection("LINKS")
      .find({})
      .sort({ title: 1 })
      .toArray();

      res.status(200).json(links);
  } catch (e) {
    console.error(e);
  }

}