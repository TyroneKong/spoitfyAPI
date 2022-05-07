import React from "react";

function TopTracksCard({ track, index, handleClick }) {
  return (
    <div>
      <div className="track__image-container">
        <div className="track__number">
          <p>{index + 1}</p>
        </div>
        <img
          onClick={() => handleClick(track.id)}
          className="track__image"
          src={track.album.images[0].url}
        ></img>

        <div className="track__container">
          <div className="track__artist">
            <p>
              <span className="track__artist-name">{track.name}</span>
              <br />
              {track.artists[0].name}
            </p>
          </div>
          <div className="track__album">
            <p>{track.album.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTracksCard;
