import React from "react";
import PlaylistPageTrackListCard from "./PlaylistPageTrackListCard";
import "./PlaylistPageTrackList.scss";

function PlaylistPageTrackList({ data }) {
  return (
    <div className="playlistPageTrackList">
      {data.map((item) => {
        return <PlaylistPageTrackListCard data={item.track} />;
      })}
    </div>
  );
}

export default PlaylistPageTrackList;
