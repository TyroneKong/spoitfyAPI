import React, { useEffect } from "react";
import "./TopArtistList.scss";

function TopArtistList({ data, currentTrack }) {
  const handleClick = (track) => {
    currentTrack(track);
    console.log(`current trackid: ${track}`);
  };

  return (
    <div className="TopArtistList">
      <h1 className="TopArtistList__title">Top tracks this month</h1>
      <p>only visible to you</p>
      {data.map((track, index) => {
        return (
          <div className="track" key={index}>
            <img
              onClick={() => handleClick(track.id)}
              className="track__image"
              src={track.album.images[0].url}
            ></img>
            <div className="track__artist">
              <h3 className="track__artist-name">{track.name}</h3>
              <p className="track__artist">{track.artists[0].name}</p>
              <p>{track.album.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopArtistList;
