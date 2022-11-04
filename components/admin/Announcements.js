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
                <p className="w-full text-3xl">Coming soon... 😘</p>
            </div>
        </div>
    )
}

export default Dashboard;
