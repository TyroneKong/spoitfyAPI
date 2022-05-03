import React, { useState, useEffect } from "react";
import "./SideBar.scss";
import logo from "../../../../images/spotifylogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Link } from "react-router-dom";
import { getUsersPlayList } from "../spotify";

function SideBar({ userid }) {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    getUsersPlayList(userid).then((response) => {
      console.log(response.data.items);
      setPlaylistData(response.data.items);
    });
  }, []);

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
        <hr className="sidebar__line" />
        {playlistData.map((data, index) => {
          return (
            <div className="sidebar__library-list" key={index}>
              <li>{data.name}</li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
