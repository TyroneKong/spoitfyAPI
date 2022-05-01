import React, { useState, useEffect } from "react";
import { getTopArtists } from "../spotify.jsx";
import TopArtistList from "../topArtistsList/TopArtistList.jsx";

function TopArtists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = () => {
    getTopArtists().then((response) => setArtists(response.data.items));
  };
  console.log(artists);
  return (
    <div>
      <TopArtistList data={artists} />
    </div>
  );
}

export default TopArtists;
