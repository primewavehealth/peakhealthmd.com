"use client";
import recordingDataRaw from "../../public/data/recordings.json";
import PaginatedList from "./PaginatedList";
import "./css/button.css";
import "./css/scroll.css";

// Sort recordings by episode (descending)
const sortedRecordings = [...recordingDataRaw].sort((a, b) => b.episode - a.episode);

function Recording() {
  return (
    <section className="w-full py-12 mb-12 bg-gradient-to-tr from-indigo-100 via-purple-50 to-blue-100" id="recordings">
      <div className="max-w-3xl pb-4 mx-auto text-center md:pb-10">
        <h3 className="max-w-xl px-8 py-8 mx-auto text-center header-color">
        Podcast{" "} 
        <span className="header-gradient-color"> 
        Recordings
        </span>
        </h3>
      </div>
      <div className="max-w-[95%] md:max-w-[75%] mx-auto">
        <PaginatedList
          recordingData={sortedRecordings}
          itemsPerPage={3}
          searchField={(item, query) =>
            item.date.toLowerCase().includes(query.toLowerCase()) ||
            item.guest.toLowerCase().includes(query.toLowerCase()) ||
            item.location.toLowerCase().includes(query.toLowerCase()) ||
            item.topic.toLowerCase().includes(query.toLowerCase())
          }
        />
      </div>
    </section>
  );
}

export default Recording;
