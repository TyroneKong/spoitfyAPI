import React, { useContext } from "react";
import "./SideBar.scss";
import logo from "../../../../images/spotifylogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Link } from "react-router-dom";
import { PlaylistContext } from "../contexts/PlaylistContext";

// playlist pulled from the context hook

function SideBar({ userid, func }) {
  const [playlist, setPlaylist] = useContext(PlaylistContext);
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
          <Link to="searchpage">
          <SearchOutlinedIcon />
          Search
          </Link>
       
        </li>
        <li>
          <Link className="sidebar__library" to="playlist">
            <LibraryMusicOutlinedIcon />
            Your Library
          </Link>
        </li>
        <li>Create Playlist</li>
        <li>Liked Songs</li>
        <hr className="sidebar__line" />
        {playlist.map((data, index) => {
          return (
            <div className="sidebar__library-list" key={index}>
              <li className="sidebar__library-item">
                <Link
                  onClick={() => func(data)}
                  className="sidebar__library-playlist"
                  to="playlistpage"
                >
                  <p>{data.name}</p>
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
