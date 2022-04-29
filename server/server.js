const express = require("express");
const app = express();
const PORT = 8888;
require("dotenv").config();
const cors = require("cors");
const querystring = require("query-string");
const generateRandomString = require("randomstring");
const axios = require("axios");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = "http://localhost:8888/callback";

app.use(cors());

const stateKey = "spotify_auth_state";

app.get("/login", (req, res) => {
  const state = generateRandomString.generate(16);

  const scope = "user-read-private user-read-email user-top-read";
  res.cookie(stateKey, state);

  const queryParams = querystring.stringify({
    client_id,
    response_type: "code",
    redirect_uri,
    state,
    scope,
  });

  res.redirect(`http://accounts.spotify.com/authorize?${queryParams}`);
});

app.get("/callback", (req, res) => {
  const code = req.query.code || null;

  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: querystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        client_id + ":" + client_secret
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;

        const queryParams = querystring.stringify({
          access_token,
          refresh_token,
          expires_in,
        });

        //redirect to react application

        res.redirect(`http://localhost:3003/?${queryParams}`);
      } else {
        res.redirect(`/?${querystring.stringify({ err: "invalid token" })}`);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/refresh_token", (req, res) => {
  const { refresh_token } = req.query;

  const options = {
    data: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        client_id + ":" + client_secret
      ).toString("base64")}`,
    },
  };

  axios
    .post("https://accounts.spotify.com/api/token", options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Listening on port ${PORT}`);
  } else {
    console.log(err);
  }
});
