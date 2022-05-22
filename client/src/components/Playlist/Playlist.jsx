import React from "react";
import PlaylistCards from "../PlaylistCards/PlaylistCards";
import "./Playlist.scss";

function Playlist({ playlistData }) {
  return (
    <div className="playlist">
      <div className="playlist__likedsongCard">
        <h1>Liked Songs</h1>{" "}
      </div>
      {playlistData.map((data, index) => {
        return <PlaylistCards key={index} data={data} />;
      })}
    </div>
  );
}

export default Playlist;
