import react, { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";

import Schedule from "./schedule/Schedule";
import SheduleCarousel from "./schedule/ScheduleCarousel";
import Links from "./communication/Links";
import Toggle from "./formComponents/Toggle"

import TrojanHead from "./svg/TrojanHead.svg";

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
          <TrojanHead className="w-1/2 md:w-1/3 mx-auto" />
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
        <TrojanHead className="w-1/2 md:w-1/3 mx-auto" />
        <p className="text-4xl mt-4 md:text-7xl text-center font-medium text-maroon-700 p-2">
          Morgan High Wrestling
        </p>
      </div>
      {list ? <Schedule data={data} /> : <SheduleCarousel data={data} />}

      <div className="container mx-auto flex flex-row-reverse">
        <Toggle onClick={() => setList(!list)} />
        <p className="font-semibold text-gold-500 self-center text-xl">{list ? "Carousel" : "List"}</p>
      </div>
      <Links />
    </>
  );
};

export default HomeContent;
