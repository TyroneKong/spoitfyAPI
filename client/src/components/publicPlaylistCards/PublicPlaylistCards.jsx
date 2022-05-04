import React from "react";
import "./PublicPlaylistCards.scss";

function PublicPlaylistCards({ data }) {
  return (
    <div className="publicPlaylist__card-container">
      <img
        className="publicPlaylist__card-image"
        src={data.images[0].url}
      ></img>
      <p>{data.name}</p>
    </div>
  );
}

export default PublicPlaylistCards;
