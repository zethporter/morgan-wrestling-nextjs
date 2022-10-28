import path from 'path';
import { link, promises as fs } from 'fs';
import clientPromise from "../../lib/mongodb";
import { _id } from '@next-auth/mongodb-adapter';
import { homedir, type } from 'os';
import { time } from 'console';
import { Today } from '@mui/icons-material';

export default async (req, res) => {
  // const calendarDirectory = path.join(process.cwd(", 'data";
  // const calendarItems = await fs.readFile(calendarDirectory + '/calendarItems.json', 'utf8"
  try {
    const client = await clientPromise;
    const db = client.db("mws");

    const calendarItems = await db
      .collection("events")
      .find({})
      .sort({ startDate: 1 })
      .toArray();

      res.status(200).json(calendarItems);
  } catch (e) {
    console.error(e);
  }

}