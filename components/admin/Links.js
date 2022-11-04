import react, { useState } from "react";
const dayjs = require('dayjs');
import useSWR from "swr";

import { openInNewTab } from "../utils";

const fetcher = (url) => fetch(url).then((res) => res.json());


const Dashboard = () => {

    const { data, error } = useSWR("/api/links", fetcher);

    if (!data)
        return (
            <p>Loading...</p>
        )
    if (error) return <p>Error getting data...</p>

    return (
        <div className="w-full bg-white p-2 divide-y-2 divide-solid divide-maroon-600">
            <p className="text-xl md:text-3xl text-left font-medium text-maroon-700 p-2">
                Links
            </p>
            <div className="w-full max-h-80 overflow-auto divide-y divide-maroon-600 pt-2">
                <div className="w-full flex flex-row justify-start bg-white p-1.5">
                    <p className="text-md font-bold w-1/6 text-maroon-800">Title</p>
                    <p className="text-md font-bold w-1/2 text-maroon-800">Sub Title</p>
                    <p className="text-md font-bold text-maroon-800">URL</p>
                </div>
                {data.map((item, i) => {
                    return (
                        <div key={i} className="w-full flex flex-row justify-start p-1.5 hover:bg-gold-50 hover:rounded cursor-pointer">
                            <p className="text-md w-1/6 text-maroon-800">{item.title}</p>
                            <p className="text-md w-1/2 text-maroon-800">{item.subTitle}</p>
                            <p className="text-md text-maroon-800">{item.url}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Dashboard;
