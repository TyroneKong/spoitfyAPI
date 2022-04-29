import React from "react";
import "./TopArtistList.scss";

function TopArtistList({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((track, index) => {
        return (
          <div className="track" key={index}>
            <img className="track__image" src={track.album.images[0].url}></img>
            <div>
              <h3>{track.name}</h3>
              <p>{track.artists[0].name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopArtistList;
