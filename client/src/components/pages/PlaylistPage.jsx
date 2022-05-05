import React, { useEffect, useState } from "react";
import "./PlaylistPage.scss";
import { getPlaylistTracks } from "../spotify";
import PlaylistPageTrackList from "./PlaylistPageTrackList";

function PlaylistPage({ currentPlaylistItem }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlaylistTracks(currentPlaylistItem.id).then((response) => {
      console.log(response.data.tracks.items);
      setData(response.data.tracks.items);
    });
  }, [currentPlaylistItem.id]);

  const images = currentPlaylistItem.images[0].url;
  const name = currentPlaylistItem.name;

  return (
    <div className="playlistPage">
      <div className="playlistPage__container">
        <img className="playlistPage__image" src={images}></img>
        <h1 className="playlistPage__name">{name}</h1>
      </div>

      <PlaylistPageTrackList data={data} />
    </div>
  );
}

export default PlaylistPage;
