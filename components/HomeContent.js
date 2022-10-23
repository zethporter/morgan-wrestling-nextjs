import react, { useState, useEffect } from "react";

import useSWR from "swr";

import Schedule from "./schedule/Schedule";
import SheduleCarousel from "./schedule/ScheduleCarousel";
import Links from "./communication/Links";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeContent = () => {
  const [list, setList] = useState(false);
  const [tester, setTester] = useState();
  const { data, error } = useSWR("/api/calendar", fetcher);

  const handleToggle = (text) => {
    setTester(text);
  };

  if (!data)
    return (
      <div>
        <div className="container bg-white rounded-lg mx-auto p-2 shadow-xl">
          <img className="md:w-1/3" src="/TrojanHead.svg" />
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
        <img src="/TrojanHead.svg" className="w-1/2 md:w-1/3 mx-auto" />
        <p className="text-4xl mt-4 md:text-7xl text-center font-medium text-maroon-700 p-2">
          Morgan High Wrestling
        </p>
      </div>
      {list ? <Schedule data={data} /> : <SheduleCarousel data={data} />}

      <div className="container mx-auto flex flex-row-reverse">
        <label
          for="default-toggle"
          className="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value={list}
            id="default-toggle"
            className="sr-only peer"
            onClick={() => setList(!list)}
          ></input>
          <div className="w-11 h-6 bg-maroon-200 ring-4 ring-maroon-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-maroon-300 peer-checked:ring-4 peer-checked:ring-maroon-300"></div>
          <span className="ml-3 text-xl font-xl text-gold-100 s">List</span>
        </label>
      </div>
      <Links />
    </>
  );
};

export default HomeContent;
