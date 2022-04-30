import React from "react";
import "./TopArtistList.scss";

function TopArtistList({ data }) {
  console.log(data);
  return (
    <div className="TopArtistList">
      <h1 className="TopArtistList__title">Top tracks this month</h1>
      <p>only visible to you</p>
      {data.map((track, index) => {
        return (
          <div className="track" key={index}>
            <img className="track__image" src={track.album.images[0].url}></img>
            <div className="track__artist">
              <h3 className="track__artist-name">{track.name}</h3>
              <p className="track__artist">{track.artists[0].name}</p>
            </div>
            {/* <div className="track__album">
              <p className="track__album-name">{track.album.name}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default TopArtistList;
