import React, { useState, useEffect } from "react";
import { getPublicPlaylist } from "../spotify";
import PublicPlaylist_list from "../publicPlaylist_list/PublicPlaylist_list";
import "./PublicPlaylist.scss";

function PublicPlaylist() {
  const [publicPlaylistData, setPublicPlaylistData] = useState([]);

  useEffect(() => {
    fetchPublicPlaylist();
  }, []);

  const fetchPublicPlaylist = () => {
    getPublicPlaylist().then((response) => {
      console.log(response);
      setPublicPlaylistData(response.data.playlists.items);
    });
  };

  return (
    <div className="publicPlaylist">
      <div className="publicPlaylist__container">
        <div className="publicPlaylist__title">
          <h3>Public Playlist</h3>
        </div>
        <PublicPlaylist_list publicPlaylistData={publicPlaylistData} />
      </div>
    </div>
  );
}

export default PublicPlaylist;
