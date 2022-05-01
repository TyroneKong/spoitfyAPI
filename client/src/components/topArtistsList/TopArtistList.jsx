import React from "react";
import "./TopArtistList.scss";

function TopArtistList({ data }) {
  console.log(data);
  return (
    <div className="topArtist">
      {data.map((image, index) => {
        return (
          <div className="topArtist__image-container" key={index}>
            <img className="topArtist__image" src={image.images[0].url} />
            <p className="topArtist__name">{image.name}</p>
            <p className="topArtist__artist">Artist</p>
          </div>
        );
      })}
    </div>
  );
}

export default TopArtistList;
