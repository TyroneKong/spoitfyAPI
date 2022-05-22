import React from "react";

export const Logout = ({ logout, picture }) => {
  return (
    <div className="logout">
      <button className="logout--btn" onClick={logout}>
        <img className="logout--btn__image" src={picture} />
        Log out
      </button>
    </div>
  );
};
