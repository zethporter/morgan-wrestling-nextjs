import { useState, useRef, useEffect } from 'react';



const SheduleCarousel = ({ data }) => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    const today = new Date();
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(today.getDate() + 2);

    const dateFormat = (tempDate) => {
        if (tempDate === undefined || tempDate === null) {
            return "";
        } else {
            const date = new Date(tempDate);
            return new Intl.DateTimeFormat("en-US").format(date);
        }
    };

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="container bg-white rounded-lg mx-auto my-3 divide-y-2 divide-solid divide-maroon-600 shadow-xl">
            <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
                Schedule
            </p>
            <div className="carousel container bg-white my-3 rounded-b-lg mx-auto">
                <div className="relative overflow-hidden">
                    <div className="flex justify-between absolute top left w-full h-full">
                        <button
                            onClick={movePrev}
                            className="hover:text-opacity-100 text-black w-10 h-full text-center text-opacity-40 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                            disabled={isDisabled('prev')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="sr-only">Prev</span>
                        </button>
                        <button
                            onClick={moveNext}
                            className="hover:text-opacity-100 text-black w-10 h-full text-center text-opacity-40 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                            disabled={isDisabled('next')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                    <div
                        ref={carousel}
                        className="carousel-container bg-transparent relative py-6 px-10 flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                        {data.map((item, i) => {
                            let disabled = null;
                            new Date(item.startDate) > twoDaysAhead
                                ? (disabled = {
                                    background: "default",
                                    border: item.home ? "border-maroon-600" : "border-gold-500",
                                    elevation: 5,
                                })
                                : (disabled = {
                                    background: item.home ? "oldHome" : "oldAway",
                                    border: item.home ? "border-maroon-600" : "border-gold-500",
                                    elevation: 1,
                                });
                            if (new Date(item.startDate) > twoDaysAhead) {
                                return (
                                    <div
                                        key={i}
                                        className={`bg-white max-h-25 min-w-fit rounded shadow-xl py-2 pl-2 pr-6 border-l-4 ${disabled.border} hover:animate-pulse hover:bg-gold-100`}
                                        onClick={() => openInNewTab(item.link)}
                                    >
                                        <div className="divide-y divide-solid divide-maroon-600">
                                            <div>
                                                <p className="text-xl text-maroon-700">{item.name}</p>
                                            </div>
                                            <div className="border-0">
                                                <p className="text-lg text-maroon-700">
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
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SheduleCarousel;