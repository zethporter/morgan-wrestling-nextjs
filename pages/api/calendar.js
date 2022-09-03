import path from 'path';
import { promises as fs } from 'fs';

export default async (req, res) => {
  // const calendarDirectory = path.join(process.cwd(), 'data');
  // const calendarItems = await fs.readFile(calendarDirectory + '/calendarItems.json', 'utf8')

  const calendarItems = [
        {
            "name": "Viewmont @ Morgan",
            "startDate": new Date('2022-11-3'),
            "endDate": null,
            "location": "Morgan",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true
        },
        {
            "name": "Millard Ironman Duel Tournament",
            "startDate": new Date('2022-12-0'),
            "endDate": new Date('2022-12-0'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        },
        {
            "name": "Morgan @ Ridgeline",
            "startDate": new Date('2022-12-0'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
        },
        {
            "name": "Morgan @ Layton",
            "startDate": new Date('2022-12-0'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
        },
        {
            "name": "Bear River @ Morgan",
            "startDate": new Date('2022-12-1'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true
        },
        {
            "name": "Reno Tournament of Champions",
            "startDate": new Date('2022-12-1'),
            "endDate": new Date('2022-12-1'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        },
        {
            "name": "Christmas Clash",
            "startDate": new Date('2022-12-1'),
            "endDate": new Date('2022-12-1'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        },
        {
            "name": "Morgan @ Union",
            "startDate": new Date('2022-12-2'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
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
            "home": false
        },
        {
            "name": "Ben Lomand @ Morgan",
            "startDate": new Date('2023-01-01'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true
        },
        {
            "name": "Richardson Memorial",
            "startDate": new Date('2023-01-01'),
            "endDate": new Date('2023-01-01'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
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
            "home": true
        },
        {
            "name": "All-Star Duel",
            "startDate": new Date('2023-01-11'),
            "endDate": null,
            "location": "",
            "type": "",
            "time": null,
            "home": false
        },
        {
            "name": "The Rumble",
            "startDate": new Date('2023-01-11'),
            "endDate": new Date('2023-01-11'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        },
        {
            "name": "Morgan @ North Summit",
            "startDate": new Date('2023-01-11'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
        },
        {
            "name": "Morgan @ Wasatch",
            "startDate": new Date('2023-01-11'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
        },
        {
            "name": "Enterprise Tournament",
            "startDate": new Date('2023-01-21'),
            "endDate": new Date('2023-01-21'),
            "location": "",
            "type": "Tournament",
            "time": "",
            "home": false
        },
        {
            "name": "Morgan @ Juab",
            "startDate": new Date('2023-01-21'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": false
        },
        {
            "name": "South Summit @ Morgan",
            "startDate": new Date('2023-01-21'),
            "endDate": null,
            "location": "",
            "type": "Duel",
            "time": {
                "varsity": "6:30 PM",
                "JV": "5:00 PM"
            },
            "home": true
        },
        {
            "name": "Divisional Tournament",
            "startDate": new Date('2023-02-01'),
            "endDate": new Date('2023-02-01'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        },
        {
            "name": "UHSAA 3A Wrestling STate Championships",
            "startDate": new Date('2023-02-11'),
            "endDate": new Date('2023-02-11'),
            "location": "",
            "type": "Tournament",
            "time": null,
            "home": false
        }
      ]

  res.status(200).json({ calendarItems });
}
