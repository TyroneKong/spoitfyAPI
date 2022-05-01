import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import Profile from "../src/components/profile/Profile";
import TopTracks from "./components/topTracks/TopTracks";
import SpotifyPlayer from "react-spotify-web-playback";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopArtists from "./components/topArtists/TopArtists";

import {
  accessToken,
  logout,
  getCurrentUserProfile,
  getUsersPlayList,
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
        console.log(data.followers.total);
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
          <button className="logout--btn" onClick={logout}>
            Log out
          </button>
          <Profile name={name} picture={picture} followers={followers} />
          <TopArtists />
          <TopTracks currentTrack={setCurrentlyPlayingTrack} />
          <SpotifyPlayer
            styles={{
              activeColor: "#fff",
              bgColor: "#333",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
            showSaveIcon={true}
            className="spotifyPlayer"
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
