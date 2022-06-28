import React from "react";
import "./Playlist.scss";

function PlaylistCards({ data }) {
  return (
    <div className="playlist__container">
      <div className="playlist__card">
        <img className="playlist__card-image" src={data.images[0].url}></img>
        <div className="playlist__name">
          <h3>{data.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCards;
