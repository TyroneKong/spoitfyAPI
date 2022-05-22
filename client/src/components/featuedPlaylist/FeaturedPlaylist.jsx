import React from "react";
import "./FeaturedPlaylist.scss";
import FeaturedPlaylistList from "../featuredPlaylistList.jsx/FeaturedPlaylistList";
function FeaturedPlaylist({ featuredPlaylistData }) {
  return (
    <div className="featuredPlaylist">
      <h3>Featured Playlists</h3>
      <div className="featuredPlaylist-container">
        <FeaturedPlaylistList featuredPlaylistData={featuredPlaylistData} />
      </div>
    </div>
  );
}

export default FeaturedPlaylist;
