import { Dayjs } from 'dayjs';
import { useState, useRef, useEffect } from 'react';
const dayjs = require('dayjs');

import { openInNewTab } from '../utils';



const SheduleCarousel = ({ data }) => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    const twoDaysAhead = dayjs().add(-2, 'd').toDate();

    const dateFormat = (tempDate) => {
        if (tempDate === undefined || tempDate === null) {
            return "";
        } else {
            return dayjs(tempDate).format('MM/D/YYYY')
        }
    };

    return (
        <div className="container bg-white rounded-lg mx-auto my-3 divide-y-2 divide-solid divide-maroon-600 shadow-xl">
            <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
                Schedule
            </p>
            <div className="carousel container bg-white my-3 rounded-b-lg mx-auto">
                <div
                    className="carousel-container bg-transparent relative py-6 px-10 flex gap-6 overflow-x-auto overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.map((item, i) => {
                        let disabled = null;
                        dayjs(item.startDate) > twoDaysAhead
                            ? (disabled = {
                                background: "default",
                                border: item.home ? "border-maroon-600" : "border-gold-500",
                                hoverBg: item.home ? "hover:from-maroon-700 hover:text-white" : "hover:from-gold-500 hover:text-maroon-800",
                                elevation: 5,
                            })
                            : (disabled = {
                                background: item.home ? "oldHome" : "oldAway",
                                border: item.home ? "border-maroon-600" : "border-gold-500",
                                elevation: 1,
                            });
                        if (dayjs(item.startDate) > twoDaysAhead) {
                            return (
                                <div
                                    key={i}
                                    className={`bg-white text-maroon-700 max-h-25 min-w-fit cursor-pointer rounded shadow-xl py-2 pl-2 pr-6 border-l-4 ${disabled.border} hover:bg-gradient-to-br ${disabled.hoverBg} transition-all ease-in-out duration-200`}
                                    onClick={() => openInNewTab(item.link)}
                                >
                                    <div className="divide-y divide-solid divide-maroon-600">
                                        <div>
                                            <p className="text-xl text-inherit">{item.name}</p>
                                        </div>
                                        <div className="border-0">
                                            <p className="text-lg text-inherit">
                                                {item.endDate === null
                                                    ? dateFormat(item.startDate)
                                                    : [
                                                        dateFormat(item.startDate),
                                                        dateFormat(item.endDate),
                                                    ].join(" - ")}
                                            </p>
                                            <p className="text-base text-inherit">{item.type}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default SheduleCarousel;