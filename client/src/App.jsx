import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../src/components/profile/Profile";
import TopArtists from "./components/topArtists/TopArtists";

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

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        console.log(data);
        setProfile(data);
        setName(data.display_name);
        setPicture(data.images[0].url);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {!token ? (
        <Login />
      ) : (
        <>
          <button onClick={logout}>Log out</button>
          <h1>Logged in</h1>
          <Profile name={name} picture={picture} />
          <button
            onClick={() =>
              axios
                .get(profile.external_urls.spotify)
                .then((response) =>
                  console.log(response.data).catch((err) => console.log(err))
                )
            }
          >
            click here
          </button>
          <TopArtists />
        </>
      )}
    </div>
  );
}

export default App;
