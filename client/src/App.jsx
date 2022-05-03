import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import Profile from "../src/components/profile/Profile";
import SpotifyPlayer from "react-spotify-web-playback";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import ArtistInfo from "./components/artistInfo/ArtistInfo";
import UserPlayList from "./components/userPlayList/UserPlayList";
// import { ArtistInfoContextProvider } from "./components/contexts/ArtistInfoContext";

import {
  accessToken,
  logout,
  getCurrentUserProfile,
  getUsersPlayList,
  getArtistInfo,
} from "./components/spotify";

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(null);
  const [userid, setUserId] = useState(null);

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

  getUsersPlayList("slicktyrone").then((response) => {
    console.log(response);
  });

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
            <SideBar />
            <Routes>
              <Route
                path="/"
                element={
                  <Profile
                    name={name}
                    picture={picture}
                    followers={followers}
                    currentTrack={setCurrentlyPlayingTrack}
                    artistInfoid={setUserId}
                  />
                }
              />
              <Route path="playlist" element={<UserPlayList />} />
              <Route path="artistInfo" element={<ArtistInfo />} />
            </Routes>
          </Router>

          {/* <TopArtists />

          <TopTracks currentTrack={setCurrentlyPlayingTrack} /> */}
          <SpotifyPlayer
            className="spotifyPlayer"
            styles={{
              activeColor: "#fff",
              bgColor: "#333",
              color: "#fff",
              loaderColor: "#fff",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
            showSaveIcon={true}
            autoPlay={true}
            play={true}
            volume={6}
            token={token}
            maginifySliderOnHover={true}
            uris={[`spotify:track:${currentlyPlayingTrack}`]}
          />
        </>
      )}
    </div>
  );
}

export default App;
