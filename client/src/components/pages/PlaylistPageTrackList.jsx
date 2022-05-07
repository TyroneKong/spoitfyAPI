import React from "react";
import PlaylistPageTrackListCard from "./PlaylistPageTrackListCard";
import "./PlaylistPageTrackList.scss";

function PlaylistPageTrackList({ data }) {
  return (
    <div className="playlistPageTrackList">
      {data.map((item, index) => {
        return <PlaylistPageTrackListCard key={index} data={item.track} />;
      })}
    </div>
  );
}

export default PlaylistPageTrackList;
