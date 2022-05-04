import React from "react";
import PublicPlaylistCards from "../publicPlaylistCards/PublicPlaylistCards";
import "./PublicPlaylist_list.scss";

function PublicPlaylist_list({ publicPlaylistData }) {
  return (
    <div className="publicPlaylist__cards-container">
      {publicPlaylistData.slice(0, 7).map((item, index) => {
        return (
          <div key={index}>
            <PublicPlaylistCards data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default PublicPlaylist_list;
