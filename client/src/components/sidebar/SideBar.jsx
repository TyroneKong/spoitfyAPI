import React from "react";
import "./SideBar.scss";
import logo from "../../../../images/spotifylogo.png";

function SideBar() {
  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} />
      <ul className="sidebar__list">
        <li>Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
    </nav>
  );
}

export default SideBar;
