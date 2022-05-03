import React, { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ currentTrack }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getTopTracks()
      .then((response) => {
        setTracks(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <TopTracksList data={tracks} currentTrack={currentTrack} />
    </div>
  );
}

export default TopTracks;
