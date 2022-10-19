import react, { useState, useEffect } from "react";

import useSWR from "swr";
import { openInNewTab } from "../utils";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Links = () => {
    const { data, error } = useSWR("/api/links", fetcher);

    if (!data)
        return (
            <div className="container w-full h-50 bg-gold-900 animate-pulse"></div>
        );
    if (error) return <p>No Links...</p>

    return (
        <>
            <div className="container min-h-50 bg-white rounded-lg mx-auto p-2 mt-2 divide-y-2 divide-solid divide-maroon-600">
                <p className="text-xl md:text-3xl text-center font-medium text-maroon-700 p-2">
                    Links
                </p>
                <div className="container flex flex-col gap-3 pt-2">
                    {
                        data.map((link, i) => (
                            <div key={i} onClick={() => openInNewTab(link.url)} className="w-full py-2 px-6 drop-shadow-xl bg-white hover:bg-gradient-to-br hover:from-gold-100 hover:to-maroon-100 rounded-lg transition-all ease-in-out duration-300 cursor-pointer">
                                <p className="text-xl text-maroon-700 font-semibold">{link.title}</p>
                                <p className="text-lg text-maroon-500 font-medium">{link.subTitle}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )


}

export default Links