import useSWR from "swr";
import { openInNewTab } from "../utils";
import LoadingRing from "../LoadingRing";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Links = () => {
  const { data, error, isLoading } = useSWR("/api/links");

  if (!data) return <LoadingRing />;

  if (isLoading) return <LoadingRing />;
  if (error) return <p>No Links...</p>;

  return (
    <>
      <div className="container min-h-50 rounded-lg mx-auto p-2 mt-2">
        <div className="container flex flex-col gap-3 pt-2">
          {data.map((link, i) => (
            <div
              key={i}
              onClick={() => openInNewTab(link.url)}
              className="w-full h-auto p-2 btn btn-large btn-primary"
            >
              <p className="text-lg text-accent-content font-semibold">
                {link.title}
              </p>
              <p className="text-md text-accent-content font-medium">
                {link.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Links;
