import React from "react";
import "./FeaturedPlaylistCard.scss";

function FeaturedPlaylistCard({ images }) {
  return (
    <div className="featuredPlaylist__image-container">
      <img className="featuredPlaylist__image" src={images}></img>
    </div>
  );
}

export default FeaturedPlaylistCard;
