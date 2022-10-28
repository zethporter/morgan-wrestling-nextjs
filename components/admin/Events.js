import react, { useState } from "react";
const dayjs = require('dayjs');
import useSWR from "swr";

import { openInNewTab } from "../utils";
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
          
            <div id="defaultModal" tabindex="-1" aria-hidden="true" className={`${modal} bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center1 `}>
                <div className="relative p-4 w-full max-w-2xl h-full mx-auto mt-10 md:h-auto">
                    
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h3>
                            <button onClick={() => setModal('hidden')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button onClick={() => setModal('hidden')} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;
