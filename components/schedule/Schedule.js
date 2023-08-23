import Link from "next/link";
import dayjs from "dayjs";
import clsx from "clsx";
import axios from "axios";
import useSWR from "swr";

import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import { openInNewTab } from "../utils";
import LoadingRing from "../LoadingRing";

const Schedule = () => {
  const { data, error, isLoading } = useSWR("/api/calendar");

  if (!data) return <LoadingRing />;

  if (isLoading) return <LoadingRing />;
  if (error) return <p>No profile data</p>;

  return (
    <div className="p-2 mx-auto">
      <div className="flex justify-center flex-wrap pt-2 gap-1">
        {data &&
          data.map((item, i) => (
            <div
              key={i}
              className={clsx("card card-compact w-full sm:w-80", {
                "bg-primary text-primary-content": item.home,
                "bg-secondary text-primary": !item.home,
              })}
            >
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>
                  {dayjs(item.startDate).format("MMMM D, YYYY")}
                  <span className={clsx({ hidden: !item.endDate })}>
                    {` - ${dayjs(item.endDate).format("MMMM D, YYYY")}`}
                  </span>
                </p>
                <div
                  className={clsx("badge", {
                    "badge-secondary": item.home,
                    "badge-primary": !item.home,
                  })}
                >
                  {item.type}
                </div>
                <div className="card-actions justify-end min-h-12">
                  <button
                    className={clsx(
                      "btn btn-outline text-xl border-0",
                      {
                        "btn-accent": !item.home,
                        "btn-secondary": item.home,
                      },
                      {
                        hidden: !item.link,
                      }
                    )}
                  >
                    <Link href={item.link}>
                      <HiArrowTopRightOnSquare />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Schedule;
