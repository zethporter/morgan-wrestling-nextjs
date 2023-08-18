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
  const { data, error, loading } = useSWR("/api/calendar", fetcher);

  const handleToggle = (text) => {
    setTester(text);
  };

  if (!data)
    return (
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <p className="text-3xl text-primary">Oops something went wrong.</p>
        </div >
      </div >
    );

  if (error) return <p>No profile data</p>;

  if (loading) return <p>loading...</p>


  return (
    <>
      <div className="hero-content bg-white flex-col lg:flex-row-reverse">
        <TrojanHead className="p-1 max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl text-primary font-bold">Morgan High Wrestling</h1>
          <p className="py-6 text-accent">Welcome to the Morgan High wrestling page. Below you will see the schedule and other important information for parents and wrestlers.</p>
        </div>
      </div >
      {list ? <Schedule data={data} /> : <SheduleCarousel data={data} />}

      <div className="container mx-auto flex flex-row-reverse">
        <Toggle color={'secondary'} onClick={() => setList(!list)} />
        <p className="font-semibold text-gold-500 self-center text-xl">{list ? "Carousel" : "List"}</p>
      </div>
      <Links />
    </>
  );
};

export default HomeContent;
