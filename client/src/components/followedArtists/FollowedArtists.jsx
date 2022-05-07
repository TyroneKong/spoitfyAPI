import React, { useState, useEffect } from "react";
import { getFollowedArtist } from "../spotify";

function FollowedArtists() {
  useEffect(() => {
    fetchFollowedArtist();
  }, []);

  const fetchFollowedArtist = () => {
    getFollowedArtist().then((response) => {
      console.log(response);
    });
  };

  return <div>FollowedArtists</div>;
}

export default FollowedArtists;
