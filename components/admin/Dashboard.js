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
                Calendar Items
            </p>
            <div className="w-full max-h-80 overflow-auto divide-y divide-maroon-600 pt-2">
                {data.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={`bg-white w-full`}
                            onClick={() => openInNewTab(item.link)}
                        >
                            <div className="w-full flex flex-row justify-between my-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 rounded-full p-0.5 text-maroon-700 cursor-pointer hover:text-maroon-500 hover:bg-maroon-50">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                <p className="text-md text-maroon-800">{item.name}</p>
                                <p className="text-md text-maroon-800">{item.startDate}</p>
                                <p className="text-md text-maroon-800">{item.endDate}</p>
                                <p className="text-md text-maroon-800">{item.type}</p>
                                <p className="text-md text-maroon-800">{item.link}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Dashboard;
