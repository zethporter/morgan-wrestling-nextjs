import react, { useState } from "react";
import Link from "next/link";
import dayjs from 'dayjs';
import clsx from 'clsx';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

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
    <div className="p-2 divide-y-2 divide-solid divide-maroon-600 shadow-xl">
      <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
        Schedule
      </p>
      <div className="flex flex-wrap pt-2 gap-1">
        {data.map((item, i) => {
          return (
            <div key={i} className={clsx(
              "card card-compact w-full sm:w-80",
              {
                'bg-primary text-primary-content': item.home,
                'bg-secondary text-primary': !item.home
              }
            )}>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>
                  {dayjs(item.startDate).format('MMMM D, YYYY')}
                  <span className={clsx({ 'hidden': !item.endDate })}>
                    {` - ${dayjs(item.endDate).format('MMMM D, YYYY')}`}
                  </span>
                </p>
                <div
                  className={clsx(
                    "badge",
                    {
                      "badge-secondary": item.home,
                      "badge-primary": !item.home
                    }
                  )}
                >
                  {item.type}
                </div>
                <div className="card-actions justify-end min-h-12">
                  <button className={clsx(
                    "btn btn-outline text-xl border-0",
                    {
                      'btn-accent': !item.home,
                      'btn-secondary': item.home
                    },
                    {
                      'hidden': !item.link
                    }
                  )}>
                    <Link href={item.link} ><HiArrowTopRightOnSquare /></Link>
                  </button>
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


