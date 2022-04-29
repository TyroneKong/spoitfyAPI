import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  accessToken,
  logout,
  getCurrentUserProfile,
} from "./components/spotify";

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        console.log(data);
        setProfile(data);
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
        </>
      )}
    </div>
  );
}

export default App;
