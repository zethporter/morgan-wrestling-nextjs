import react, { useState } from "react";
const dayjs = require('dayjs');
import useSWR from "swr";

import { openInNewTab } from "../utils";

const fetcher = (url) => fetch(url).then((res) => res.json());


const Dashboard = () => {

    const { data, error } = useSWR("/api/calendar", fetcher);

    const dateFormat = (tempDate) => {
        if (tempDate === undefined || tempDate === null) {
            return "";
        } else {
            return dayjs(tempDate).format('MM/D/YYYY')
        }
    };

    if (!data)
        return (
            <p>Loading...</p>
        )
    if (error) return <p>Error getting data...</p>

    return (
        <div className="w-full bg-white p-2 divide-y-2 divide-solid divide-maroon-600">
            <p className="text-xl md:text-3xl text-left font-medium text-maroon-700 p-2">
                Announcements
            </p>
            <div className="w-full max-h-80 overflow-auto divide-y divide-maroon-600 pt-2">
                <div className="w-full flex flex-row justify-start bg-white p-1.5">
                    <p className="text-md w-1/4 text-maroon-800">Name</p>
                    <p className="text-md w-1/6 text-maroon-800">Start Date</p>
                    <p className="text-md w-1/6 text-maroon-800">End Date</p>
                    <p className="text-md text-maroon-800">Type</p>
                </div>
                {data.map((item, i) => {
                    return (
                        <div key={i} className="w-full flex flex-row justify-start p-1.5 hover:bg-gold-50 hover:rounded cursor-pointer">
                            <p className="text-md w-1/4 text-maroon-800">{item.name}</p>
                            <p className="text-md w-1/6 text-maroon-800">{item.startDate}</p>
                            <p className="text-md w-1/6 text-maroon-800">{item.endDate}</p>
                            <p className="text-md text-maroon-800">{item.type}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Dashboard;
