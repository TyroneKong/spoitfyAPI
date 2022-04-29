import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    const accessToken = urlParams.get("access_token");
    const refresh_token = urlParams.get("refresh_token");
    console.log(accessToken);
  }, []);

  return (
    <a href="http://localhost:8888/login">
      <button>Login</button>
    </a>
  );
};

export default Login;
