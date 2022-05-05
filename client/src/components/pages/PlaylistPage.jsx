import React from "react";
import "./PlaylistPage.scss";

function PlaylistPage({ currentPlaylistItem }) {
  const images = currentPlaylistItem.images[0].url;

  return (
    <div className="playlistPage">
      <img className="playlistPage__image" src={images}></img>
      <h1 className="playlistPage__title">Playlist Page</h1>
    </div>
  );
}

export default PlaylistPage;
