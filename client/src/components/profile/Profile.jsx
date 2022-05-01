import React from "react";
import "./Profile.scss";

function Profile({ name, picture, followers }) {
  return (
    <div className="profile">
      <img className="profile__image" src={picture}></img>
      <div>
        <h2 className="profile__name">{name}</h2>
      </div>
      <p>{followers} follower</p>
    </div>
  );
}

export default Profile;
