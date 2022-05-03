import React, { useState, useEffect } from "react";
import TopArtistList from "../topArtistsList/TopArtistList.jsx";

function TopArtists({ artist }) {
  return (
    <div>
      <TopArtistList data={artist} />
    </div>
  );
}

export default TopArtists;
