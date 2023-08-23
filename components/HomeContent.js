import react, { useState, useEffect } from "react";
import clsx from "clsx";

import Schedule from "./schedule/Schedule";
import SheduleCarousel from "./schedule/ScheduleCarousel";
import Links from "./communication/Links";
import Toggle from "./formComponents/Toggle";

import TrojanHead from "./svg/TrojanHead.svg";

const HomeContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="min-h-screen">
      <div className="hero">
        <div className="hero-content rounded-xl flex-col lg:flex-row-reverse">
          <TrojanHead className="p-1 max-w-sm" />
          <div>
            <p className="text-5xl text-primary font-bold">
              Morgan High Wrestling
            </p>
            <p className="py-6 text-secondary-content">
              Welcome to the Morgan High wrestling page. Below you will see the
              schedule and other important information for parents and
              wrestlers.
            </p>
          </div>
        </div>
      </div>
      <div className="w-fit tabs tabs-boxed mx-auto px-2 py-1 bg-zinc-200">
        <a
          className={clsx("tab text-primary text-2xl", {
            "tab-active": activeTab === 0,
          })}
          onClick={() => setActiveTab(0)}
        >
          Schedule
        </a>
        <a
          className={clsx("tab text-primary text-2xl", {
            "tab-active": activeTab === 1,
          })}
          onClick={() => setActiveTab(1)}
        >
          Links
        </a>
      </div>
      {activeTab === 0 && <Schedule />}
      {activeTab === 1 && <Links />}
    </main>
  );
};

export default HomeContent;
