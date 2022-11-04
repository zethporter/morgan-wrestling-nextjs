import react, { useState } from "react";
const dayjs = require('dayjs');
import useSWR from "swr";

import { openInNewTab } from "../utils";
import TextBox from "../formComponents/TextBox"
import DateInput from "../formComponents/DateInput"
import { HiCheckCircle, HiXCircle } from "react-icons/hi"

const fetcher = (url) => fetch(url).then((res) => res.json());


const Dashboard = () => {
    const [modal, setModal] = useState('hidden')

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
        <div className="w-full border-b-8 border-maroon-300 bg-white b p-2 divide-y-2 divide-solid divide-maroon-600">
            <p className="text-xl md:text-3xl text-left font-medium text-maroon-700 p-2">
                Events
            </p>
            <div className="w-full max-h-80 overflow-auto divide-y divide-maroon-600 pt-2">
                <div className="w-full font-bold flex flex-row justify-start bg-white p-1.5">
                    <p className="text-md font-bold w-1/4 text-maroon-800">Name</p>
                    <p className="text-md font-bold w-1/6 text-maroon-800">Start Date</p>
                    <p className="text-md font-bold w-1/6 text-maroon-800">End Date</p>
                    <p className="text-md font-bold w-1/6 text-maroon-800">Type</p>
                    <p className="text-md font-bold text-maroon-800">Has Link</p>
                </div>
                {data.map((item, i) => {
                    return (
                        <div key={i} onClick={() => setModal('')} className="w-full flex flex-row justify-start p-1.5 hover:bg-gold-50 hover:rounded cursor-pointer">
                            <p className="text-md w-1/4 text-maroon-800">{item.name}</p>
                            <p className="text-md w-1/6 text-maroon-800">{item.startDate}</p>
                            <p className="text-md w-1/6 text-maroon-800">{item.endDate}</p>
                            <p className="text-md w-1/6 text-maroon-800">{item.type}</p>
                            <p className="text-2xl text-maroon-800 pl-2">{item.link ? <HiCheckCircle className="text-success" /> : <HiXCircle className="text-danger" />}</p>
                        </div>
                    );
                })}
            </div>
          
            <div className={`${modal} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}>
                <div className="relative p-4 w-full max-w-4xl h-full mx-auto mt-10 md:h-auto">
                    <div className="relative p-3 bg-white rounded-lg shadow">
                    <TextBox />
                    <DateInput />
                        <div className="p-6 space-y-6">
                            
                        </div>
                        
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="defaultModal" type="button" className="text-white bg-maroon-700 hover:bg-maroon-800 focus:ring-4 focus:outline-none focus:ring-maroon-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                            <button onClick={() => setModal('hidden')} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-maroon-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;
