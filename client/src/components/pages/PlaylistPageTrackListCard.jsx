import React from "react";
import "./PlaylistPageTrackListCard.scss";

function PlaylistPageTrackListCard({ data }) {
  const albumData = data.album;
  const artistData = data.artists;

  return (
    <div className="playlistPageTrackListCard">
      <img
        className="playlistPageTrackListCard__image"
        src={albumData.images[0]?.url}
      ></img>
      <div className="playlistPageTrackListCard__title">
        <p>
          {albumData.name}

          <br />
          {artistData[0].name}
        </p>
      </div>
    </div>
  );
}

export default PlaylistPageTrackListCard;
