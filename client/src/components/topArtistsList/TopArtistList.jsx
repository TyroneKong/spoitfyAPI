import React from "react";
import "./TopArtistList.scss";
import { Link } from "react-router-dom";

function TopArtistList({ data }) {
  return (
    <div className="TopArtist">
      <div className="topArtist__title-container">
        <p>
          <span className="topArtist__paragraph">Top Artists of the month</span>
          <br />
          <span className="topArtist__paragraph2">Only visible to you</span>
        </p>
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
