import React from "react";
import "./TopTracksList.scss";

function TopTracksList({ data, currentTrack }) {
  const handleClick = (track) => {
    currentTrack(track);
    console.log(`current trackid: ${track}`);
  };

  return (
    <div className="TopTracksList">
      <div className="TopTracksList__heading">
        <p className="TopTracksList__title">
          <span className="TopTracksList__bold-title">
            Top tracks this month
          </span>
          <br />
          only visible to you
        </p>
      </div>

      {data.map((track, index) => {
        return (
          <div className="track" key={index}>
            <div className="track__number">
              <p>{index + 1}</p>
            </div>
            <div className="track__image-container">
              <img
                onClick={() => handleClick(track.id)}
                className="track__image"
                src={track.album.images[0].url}
              ></img>
            </div>

            <div className="track__artist">
              <h3 className="track__artist-name">{track.name}</h3>
              <p className="track__artist">{track.artists[0].name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopTracksList;
