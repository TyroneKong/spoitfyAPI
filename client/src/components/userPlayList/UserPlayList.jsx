import React, { useState, useEffect } from "react";
import { getUsersPlayList } from "../spotify";
import Playlist from "../Playlist/Playlist";
import "./UserPlaylist.scss";

function UserPlaylist({ userid }) {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    getUsersPlayList(userid).then((response) => {
      console.log(response.data.items);
      setPlaylistData(response.data.items);
    });
  }, []);

  return (
    <div className="playlist-main">
      <div className="playlist__title">
        <h3>Playlist</h3>
      </div>
      <Playlist playlistData={playlistData} />
    </div>
  );
}

export default UserPlaylist;
