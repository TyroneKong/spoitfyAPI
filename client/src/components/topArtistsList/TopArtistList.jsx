import React from "react";
import "./TopArtistList.scss";
import { Link } from "react-router-dom";

function TopArtistList({ data }) {
  console.log(data);
  return (
    <div className="TopArtist">
      <div className="topArtist__title-container">
        <h3>Top Artists of the month</h3>
      </div>
      <div className="topArtist">
        {data.map((image, index) => {
          return (
            <div className="topArtist__image-container" key={index}>
              <Link to="artistInfo">
                <img className="topArtist__image" src={image.images[0].url} />
              </Link>
              <p className="topArtist__name">{image.name}</p>
              <p className="topArtist__artist">Artist</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopArtistList;
