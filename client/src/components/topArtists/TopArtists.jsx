import React, { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import TopArtistList from "../topArtistList/TopArtistList";

function TopArtists() {
  const [tracks, setTracks] = useState([]);

  const handleClick = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const { data } = await getTopArtists("tracks");
      console.log(data);
      setTracks(data.items);
      console.log(tracks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>TopArtists</button>
      <TopArtistList data={tracks} />
    </div>
  );
}

export default TopArtists;
