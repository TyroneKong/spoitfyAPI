import React, { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ currentTrack, tracks }) {
  return (
    <div>
      <TopTracksList data={tracks} currentTrack={currentTrack} />
    </div>
  );
}

export default TopTracks;
