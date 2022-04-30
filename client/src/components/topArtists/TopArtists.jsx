import React, { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import TopArtistList from "../topArtistList/TopArtistList";

function TopArtists({ currentTrack }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await getTopArtists("tracks");
      console.log(data.items);
      setTracks(data.items);
      console.log(tracks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TopArtistList data={tracks} currentTrack={currentTrack} />
    </div>
  );
}

export default TopArtists;
