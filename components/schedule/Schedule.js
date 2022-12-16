import react, { useState } from "react";
const dayjs = require('dayjs');

import { openInNewTab } from "../utils";


const Schedule = ({ data }) => {

    const [linkAlert, setLinkAlert] = useState(false);    
    const twoDaysAhead = dayjs().add(-2, 'd').toDate();

    const dateFormat = (tempDate) => {
        if (tempDate === undefined || tempDate === null) {
            return "";
        } else {
            return dayjs(tempDate).format('MM/D/YYYY')
        }
    };

    return (
        <div className="container bg-white rounded-lg mx-auto my-3 p-2 divide-y-2 divide-solid divide-maroon-600 shadow-xl">
            <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
                Schedule
            </p>
            <div className="flex flex-wrap pt-2 gap-2.5">
                {data.map((item, i) => {
                    let disabled = null;
                    dayjs(item.startDate) > twoDaysAhead
                        ? (disabled = {
                            background: "bg-white",
                            border: item.home ? "border-maroon-600" : "border-gold-500",
                            hoverBg: item.home ? "hover:from-maroon-700 hover:text-white" : "hover:from-gold-500 hover:text-maroon-800",
                            elevation: 5,
                        })
                        : (disabled = {
                            background: item.home ? "bg-maroon-200" : "bg-gold-200",
                            border: item.home ? "border-maroon-600" : "border-gold-500",
                            hoverBg: item.home ? "hover:from-maroon-700 hover:text-white" : "hover:from-gold-500 hover:text-maroon-800",
                            elevation: 1,
                        });
                    return (
                        <div
                            key={i}
                            className={`${disabled.background} flex-grow cursor-pointer w-full lg:w-1/3 rounded shadow-xl p-2 border-l-4 ${disabled.border} hover:bg-gradient-to-br ${disabled.hoverBg} transition-all ease-in-out duration-200`}
                            onClick={() => openInNewTab(item.link)}
                        >
                            <div className="divide-y divide-solid divide-maroon-600">
                                <div>
                                    <p className="text-xl text-inherit">{item.name}</p>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <p className="text-lg text-inherit">
                                        {item.endDate === null
                                            ? dateFormat(item.startDate)
                                            : [
                                                dateFormat(item.startDate),
                                                dateFormat(item.endDate),
                                            ].join(" - ")}
                                    </p>
                                    <p className="text-base text-maroon-700">{item.type}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Schedule;


