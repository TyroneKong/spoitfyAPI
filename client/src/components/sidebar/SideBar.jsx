import React from "react";
import "./SideBar.scss";
import logo from "../../../../images/spotifylogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

function SideBar() {
  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} />
      <ul className="sidebar__list">
        <li className="sidebar__home">
          <HomeOutlinedIcon />
          Home
        </li>
        <li className="sidebar__search">
          <SearchOutlinedIcon />
          Search
        </li>
        <li className="sidebar__library">
          <LibraryMusicOutlinedIcon />
          Your Library
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
