import React from "react";
import "./FeaturedPlaylistList.scss";
import FeaturedPlaylistCard from "../featuredPlaylistCard/FeaturedPlaylistCard";

function FeaturedPlaylistList({ featuredPlaylistData }) {
  return (
    <div className="featuredPlaylist__list">
      {featuredPlaylistData.map((data, index) => {
        return <FeaturedPlaylistCard key={index} images={data.images[0].url} />;
      })}
    </div>
  );
}

export default FeaturedPlaylistList;
