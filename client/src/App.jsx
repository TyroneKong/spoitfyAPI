import "./App.css";
import Login from "../src/components/Login";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    console.log(`accessToken: ${accessToken}`);
    console.log(`refreshToken: ${refreshToken}`);

    if (refreshToken) {
      axios
        .get(
          `http://localhost:8888/refresh_token?refresh_token=${refreshToken}`
        )

        .then((data) => console.log(data.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
