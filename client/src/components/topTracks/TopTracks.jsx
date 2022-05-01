import React, { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ currentTrack }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await getTopTracks();
      console.log(data.items);
      setTracks(data.items);
      console.log(tracks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TopTracksList data={tracks} currentTrack={currentTrack} />
    </div>
  );
}

export default TopTracks;
