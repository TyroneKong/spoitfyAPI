import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../src/components/profile/Profile";
import SideBar from "./components/sidebar/SideBar";
import ArtistInfo from "./components/artistInfo/ArtistInfo";
import UserPlaylist from "./components/userPlayList/UserPlayList";
import PlaylistPage from "./components/pages/PlaylistPage";
import SearchPage from "./components/pages/SearchPage"
import { ArtistInfoContextProvider } from "./components/contexts/ArtistInfoContext";
import { PlaylistContextProvider } from "./components/contexts/PlaylistContext";
import SpotifyPlayerApp from "./components/spotifyPlayer/SpotifyPlayer";


//get request functions

import {
  accessToken,
  logout,
  getCurrentUserProfile,
} from "./components/spotify";

// creating context for current track playing
export const CurrentTrackContext = createContext();

function App() {
  //setting state
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(
    ""
  );
  const [userid, setUserId] = useState(null);
  const [currentPlaylistitem, setCurrentPlaylistItem] = useState([]);

  // get current user data
  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setProfile(data);
        console.log(data);
        setName(data.display_name);
        setPicture(data.images[0].url);
        setFollowers(data.followers.total);
        setUserId(data.id);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const getCurrentPlaylistItem = (data) => {
    setCurrentPlaylistItem(data);
  };

  return (
    <div className="App">
      {!token ? (
        <Login className="login--btn" />
      ) : (
        <>
          <div className="logout">
            <button className="logout--btn" onClick={logout}>
              <img className="logout--btn__image" src={picture} />
              Log out
            </button>
          </div>

          <Router>
            <ArtistInfoContextProvider>
              <PlaylistContextProvider>
                <CurrentTrackContext.Provider
                  value={[currentlyPlayingTrack, setCurrentlyPlayingTrack]}
                >
                  <SideBar userid={userid} func={getCurrentPlaylistItem} />

                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Profile
                          name={name}
                          picture={picture}
                          followers={followers}
                          artistInfoid={setUserId}
                        />
                      }
                    />
                    <Route
                      path="playlist"
                      element={<UserPlaylist userid={userid} />}
                    />
                    <Route path="artistInfo" element={<ArtistInfo />} />

                    <Route
                      path="playlistpage"
                      element={
                        <PlaylistPage
                          currentPlaylistItem={currentPlaylistitem}
                        />
                      }
                    />
                    <Route path="searchpage" element={<SearchPage/>}/>
                  </Routes>
                </CurrentTrackContext.Provider>
              </PlaylistContextProvider>
            </ArtistInfoContextProvider>
          </Router>

        <SpotifyPlayerApp currentlyPlayingTrack={currentlyPlayingTrack} token={token}/>
        </>
      )}
    </div>
  );
}

export default App;
