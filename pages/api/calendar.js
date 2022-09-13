import path from 'path';
import { promises as fs } from 'fs';

export default async (req, res) => {
  // const calendarDirectory = path.join(process.cwd(), 'data');
  // const calendarItems = await fs.readFile(calendarDirectory + '/calendarItems.json', 'utf8')

  const calendarItems = [
        {
            "name": "Viewmont @ Morgan",
            "startDate": new Date('2022-11-30'),
            "endDate": null,
            "location": "Morgan",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true,
            "link": null
        },
        {
            "name": "Millard Ironman Duel Tournament",
            "startDate": new Date('2022-12-02'),
            "endDate": new Date('2022-12-03'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ Ridgeline",
            "startDate": new Date('2022-12-07'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ Layton",
            "startDate": new Date('2022-12-08'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "Bear River @ Morgan",
            "startDate": new Date('2022-12-14'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true,
            "link": null
        },
        {
            "name": "Reno Tournament of Champions",
            "startDate": new Date('2022-12-16'),
            "endDate": new Date('2022-12-17'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "Christmas Clash",
            "startDate": new Date('2022-12-16'),
            "endDate": new Date('2022-12-17'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ Union",
            "startDate": new Date('2022-12-21'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "LCA & Ogden @ Ogden",
            "startDate": new Date('2023-01-01'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "Ben Lomand @ Morgan",
            "startDate": new Date('2023-01-05'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true,
            "link": null
        },
        {
            "name": "Richardson Memorial",
            "startDate": new Date('2023-01-06'),
            "endDate": new Date('2023-01-07'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "Grantsville @ Morgan",
            "startDate": new Date('2023-01-11'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true,
            "link": null
        },
        {
            "name": "All-Star Duel",
            "startDate": new Date('2023-01-10'),
            "endDate": null,
            "location": "",
            "type": "",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "The Rumble",
            "startDate": new Date('2023-01-13'),
            "endDate": new Date('2023-01-14'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ North Summit",
            "startDate": new Date('2023-01-17'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ Wasatch",
            "startDate": new Date('2023-01-18'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "Enterprise Tournament",
            "startDate": new Date('2023-01-20'),
            "endDate": new Date('2023-01-21'),
            "location": "",
            "type": "Tournament",
            "time": "",
            "home": false,
            "link": null
        },
        {
            "name": "Morgan @ Juab",
            "startDate": new Date('2023-01-25'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false,
            "link": null
        },
        {
            "name": "South Summit @ Morgan",
            "startDate": new Date('2023-01-26'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true,
            "link": null
        },
        {
            "name": "Divisional Tournament",
            "startDate": new Date('2023-02-03'),
            "endDate": new Date('2023-02-04'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        },
        {
            "name": "UHSAA 3A Wrestling State Championships",
            "startDate": new Date('2023-02-15'),
            "endDate": new Date('2023-02-16'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false,
            "link": null
        }
      ]

  res.status(200).json({ calendarItems });
}
