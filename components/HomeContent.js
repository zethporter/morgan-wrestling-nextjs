import react, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  Skeleton,
  Card,
  CardActionArea,
  Snackbar,
  Alert,
} from "@mui/material";
import { FiFrown } from "react-icons/fi";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomeContent = () => {
  const { data, error } = useSWR("/api/calendar", fetcher);
  console.log(data);
  const [linkAlert, setLinkAlert] = useState(false);
  const today = new Date();
  const twoDaysAhead = new Date();
  twoDaysAhead.setDate(today.getDate() + 2);
  const openInNewTab = (url) => {
    url
      ? window.open(url, "_blank", "noopener,noreferrer")
      : setLinkAlert(true);
  };

  const dateFormat = (tempDate) => {
    if (tempDate === undefined || tempDate === null) {
      return "";
    } else {
      const date = new Date(tempDate);
      return new Intl.DateTimeFormat("en-US").format(date);
    }
  };

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
      <div className="container bg-white rounded-lg mx-auto my-3 p-2 divide-y-2 divide-solid divide-maroon-600 shadow-xl">
        <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
          Schedule
        </p>
        <div className="flex flex-wrap pt-2 gap-2.5">
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
          return (
            <div
              key={i}
              className={`bg-white flex-grow w-full lg:w-1/3 rounded shadow-xl p-2 border-l-4 ${disabled.border} hover:animate-pulse hover:bg-gold-100`}
              onClick={() => openInNewTab(item.link)}
            >
              <div className="divide-y divide-solid divide-maroon-600">
                <div>
                  <p className="text-xl text-maroon-700">{item.name}</p>
                </div>
                <div className="flex flex-wrap justify-between">
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
        })}
        </div>
      </div>
    </>
  );
};

export default HomeContent;
