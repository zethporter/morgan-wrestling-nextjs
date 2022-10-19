import react, { useState, useEffect } from "react";

import useSWR from "swr";

import Schedule from './schedule/Schedule'
import SheduleCarousel from "./schedule/ScheduleCarousel";
import Links from './communication/Links'

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeContent = () => {
  const [list, setList] = useState(false);
  const { data, error } = useSWR("/api/calendar", fetcher);
  
  if (!data)
    return (
      <div>
        <div className="container bg-white rounded-lg mx-auto p-2 shadow-xl">
        <p className="text-4xl md:text-7xl text-center font-medium text-maroon-700 p-2">
          Morgan High Wrestling
        </p>
      </div>
          <div className="animate-pulse w-full h-96 rounded-lg" height={200} />
      </div>
    );
  if (error) return <p>No profile data</p>;

  return (
    <>
      <div className="container bg-white rounded-lg mx-auto p-2 shadow-xl">
        <p className="text-4xl md:text-7xl text-center font-medium text-maroon-700 p-2">
          Morgan High Wrestling
        </p>
      </div>
      {list ? <Schedule data={data} /> : <SheduleCarousel data={data} /> }
      <div className="container flex justify-end">
      <button onClick={() => setList(!list)} className="hover:from-gold-400/50 hover:via-gold-600/50 hover:to-gold-800/50 border-solid border-1 border-gold-600 bg-gradient-to-br from-gold-400/0 via-gold-600/0 to-gold-800/0 rounded text-white px-2 py-0.5 transition-all ease-in-out duration-500">{list ? 'Show Carousel' : 'Show List'}</button>
      </div>
      <Links />
    </>
  );
};

export default HomeContent;
