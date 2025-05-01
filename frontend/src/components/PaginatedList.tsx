"use client";

import { useState } from "react";

type Recording = {
  episode: number;
  date: string;
  time: string;
  location: string;
  guest: string;
  topic: string;
  spotifyLink: string;
};

type PaginatedListProps = {
  recordingData: Recording[];
  itemsPerPage: number;
  searchField: (item: Recording, query: string) => boolean;
};

function PaginatedList({ recordingData, itemsPerPage, searchField }: PaginatedListProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayData, setDisplayData] = useState<Recording[]>(recordingData);

  const maxPages = Math.ceil(displayData.length / itemsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setDisplayData(recordingData);
      setStartIndex(0);
    }
  };

  const handleSubmit = () => {
    const filtered = recordingData.filter((item) => searchField(item, searchQuery));
    setDisplayData(filtered);
    setStartIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      handleSubmit();
    }
  };

  const prevPage = () => {
    setStartIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const nextPage = () => {
    const remaining = displayData.length - (startIndex + itemsPerPage);
    setStartIndex(startIndex + (remaining < itemsPerPage ? remaining : itemsPerPage));
  };

  return (
    <div className="w-full">
      {/* Recording Cards */}
      <div className="grid gap-6 mb-6">
        {displayData.slice(startIndex, startIndex + itemsPerPage).map((data, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg bg-white shadow-sm p-4"
          >
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
              {/* Date and Time */}
              <div className="text-center lg:w-1/5">
                <h4 className="text-lg font-semibold">{data.date}</h4>
                <p className="text-sm text-gray-500">{data.time}</p>
              </div>

              {/* Topic and Guest */}
              <div className="text-center lg:text-left lg:w-2/5">
                <h4 className="text-xl font-bold">{data.topic}</h4>
                {data.guest && data.guest.toLowerCase() !== "none" && (
                  <p className="text-sm text-gray-600 mt-1">Guest – {data.guest}</p>
                )}
              </div>

              {/* Spotify Player */}
              <div className="flex flex-col items-center lg:items-end lg:w-2/5">
                <iframe
                  loading="lazy"
                  src={data.spotifyLink}
                  height="100"
                  width="100%"
                  className="w-[300px] max-w-full border rounded"
                  title={`Spotify player for ${data.guest}`}
                  scrolling="no"
                ></iframe>
                <a
                  href={data.spotifyLink.replace("/embed/", "/")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline mt-2"
                >
                  Open in Spotify
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search + Pagination */}
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center px-2">
        {/* Search Bar */}
        <div className="flex w-full md:w-2/3 gap-2">
          <input
            type="text"
            className="flex-grow h-10 px-4 border border-black rounded text-sm"
            placeholder="Search by name, date, or topic"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={searchQuery}
          />
          <button
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded"
            onClick={handleSubmit}
            disabled={!searchQuery.trim()}
          >
            Submit
          </button>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <button
            className="px-3 py-1 bg-gray-200 rounded border text-sm disabled:opacity-50"
            onClick={prevPage}
            disabled={startIndex === 0}
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page <strong>{Math.ceil(startIndex / itemsPerPage) + 1}</strong> of{" "}
            <strong>{maxPages}</strong>
          </span>

          <button
            className="px-3 py-1 bg-gray-200 rounded border text-sm disabled:opacity-50"
            onClick={nextPage}
            disabled={startIndex + itemsPerPage >= displayData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginatedList;
