import "./App.css";
import Login from "../src/components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import { accessToken, logout } from "./components/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
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
