import React from "react";
import "./Profile.scss";
import TopArtists from "../topArtists/TopArtists";
import TopTracks from "../topTracks/TopTracks";

function Profile({ name, picture, followers, currentTrack }) {
  return (
    <div className="profile">
      <div className="profile__image-container">
        <img className="profile__image" src={picture}></img>
        <h2 className="profile__name">{name}</h2>
        <p>{followers} follower</p>
      </div>

      <TopArtists />
      <TopTracks currentTrack={currentTrack} />
    </div>
  );
}

export default Profile;
