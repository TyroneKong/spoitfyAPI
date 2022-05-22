import React, { useState, useEffect } from "react";
import { getPlaylist, getFeaturedPlaylist } from "../spotify";
import Playlist from "../Playlist/Playlist";
import "./UserPlaylist.scss";
import FeaturedPlaylist from "../featuedPlaylist/FeaturedPlaylist";

function UserPlaylist({ userid }) {
  const [playlistData, setPlaylistData] = useState([]);
  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);

  useEffect(() => {
    getPlaylist(userid).then((response) => {
      setPlaylistData(response.data.items);
    });
  }, []);

  useEffect(() => {
    getFeaturedPlaylist().then((response) => {
      setFeaturedPlaylist(response.data.playlists.items);
    });
  }, []);

  return (
    <div className="playlist-main">
      <div className="playlist__title">
        <h3>Playlist</h3>
      </div>
      <Playlist playlistData={playlistData} />
      <FeaturedPlaylist featuredPlaylistData={featuredPlaylist} />
    </div>
  );
}

export default UserPlaylist;
