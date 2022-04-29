import React from "react";
import "./Profile.scss";

function Profile({ name, picture }) {
  return (
    <div className="profile">
      <img className="profile__image" src={picture}></img>
      <h2 className="profile__name">{name}</h2>
    </div>
  );
}

export default Profile;
