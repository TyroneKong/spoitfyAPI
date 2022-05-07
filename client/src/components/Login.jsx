import React, { useEffect } from "react";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <a href="http://localhost:8888/login">
        <button className="login__btn">Login</button>
      </a>
    </div>
  );
};

export default Login;
