import React from "react";
import "./SideBar.scss";
import logo from "../../../../images/spotifylogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className="sidebar">
      <img className="sidebar__logo" src={logo} />
      <ul className="sidebar__list">
        <li>
          <Link to="/" className="sidebar__home">
            <HomeOutlinedIcon />
            Home
          </Link>
        </li>
        <li className="sidebar__search">
          <SearchOutlinedIcon />
          Search
        </li>
        <li>
          <Link className="sidebar__library" to="playlist">
            <LibraryMusicOutlinedIcon />
            Your Library
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
