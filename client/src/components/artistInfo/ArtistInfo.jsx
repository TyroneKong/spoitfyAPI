import React, { useState, useEffect, useContext } from "react";
import { ArtistInfoContext } from "../contexts/ArtistInfoContext";

function ArtistInfo() {
  const [artistInfo, setArtistInfo] = useContext(ArtistInfoContext);
  console.log(artistInfo);
  return <div>artist info</div>;
}

export default ArtistInfo;
