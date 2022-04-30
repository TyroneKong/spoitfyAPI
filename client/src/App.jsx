import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import Profile from "../src/components/profile/Profile";
import TopArtists from "./components/topArtists/TopArtists";
import SpotifyPlayer from "react-spotify-web-playback";

import {
  accessToken,
  logout,
  getCurrentUserProfile,
} from "./components/spotify";

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        console.log(data.followers.total);
        setProfile(data);
        setName(data.display_name);
        setPicture(data.images[0].url);
        setFollowers(data.followers.total);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
          <TopArtists currentTrack={setCurrentlyPlayingTrack} />
        </>
      )}
    </div>
  );
}

export default App;
