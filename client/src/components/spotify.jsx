import { accordionSummaryClasses } from "@mui/material";
import axios from "axios";

const LOCALSTORAGE_KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expireTime: "spotify_token_expire_time",
  timestamp: "spotify_token_timestamp",
};

// keys map

const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};

/**
 * Clear out all local storage item we've set and reload the page
 * @returns {void}
 *
 *
 *
 */
export const logout = () => {
  //clear all localstorage items

  for (const property in LOCALSTORAGE_KEYS) {
    window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
  }

  //navigate to homepage

  window.location = window.location.origin;
};

/** checks if the amount of time that has elapsed between the timestamp in localstorage
 * and now is greater than the expiration time of 3600 seconds (1 hour)
 * @returns {boolean} whether or not the access token in localstorage has expired
 */

const hasTokenExpired = () => {
  const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;
  if (!accessToken || !timestamp) {
    return false;
  }
  const millisecondsElapsed = Date.now() - Number(timestamp);
  return millisecondsElapsed / 1000 > Number(expireTime);
};

const refreshToken = async () => {
  try {
    //Logout if theres no refresh token stored or we've managed to get into a reload infinite loop
    if (
      !LOCALSTORAGE_VALUES.refreshToken ||
      LOCALSTORAGE_VALUES.refreshToken === "undefined" ||
      Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000 < 1000
    ) {
      console.log("no refresh token available");
      logout();
    }

    //Uue /refresh token endpoint from our node app
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`
    );

    //Update localstorage values error
    window.localStorage.setItem(
      LOCALSTORAGE_VALUES.accessToken,
      data.access_token
    );
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

    //Reload the page for localstorage updates to be reflected
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

/**
 * Handles logic for retrieving the Spotify access token from local storage
 * or URL query params
 * @returns {string} A spotify accessToken
 *
 *
 */

const getAccessToken = () => {
  const querystring = window.location.search;
  const urlParams = new URLSearchParams(querystring);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
  };

  const hasError = urlParams.get("error");

  //if theres an error OR the token in the localstorage has expired, refresh the token
  if (
    hasError ||
    hasTokenExpired() ||
    LOCALSTORAGE_VALUES.accessToken === "undefined"
  ) {
    refreshToken();
  }

  if (
    LOCALSTORAGE_VALUES.accessToken &&
    LOCALSTORAGE_VALUES.accessToken === "undefined"
  ) {
    return LOCALSTORAGE_VALUES.accessToken;
  }

  // if there is a token in the URL query params, the user is logging in for the first time and
  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property]);
    }

    //set timestamp

    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

    // Return access toen from query params
    return queryParams[LOCALSTORAGE_KEYS.accessToken];
  }
  // we should never get here
  return false;
};

export const accessToken = getAccessToken();

/** checks
 *
 *
 */

axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = "Bearer " + accessToken;
axios.defaults.headers["Content-Type"] = "application/json";

// get current user userProfile
export const getCurrentUserProfile = () => axios.get("/me");

//get top tracks
export const getTopTracks = () => axios.get(`/me/top/tracks`);

// get top artists
export const getTopArtists = () =>
  axios.get("/me/top/artists?time_range=short_term");

//get get artist info

export const getArtistInfo = (id) => axios.get(`/artists/${id}`);

// get artist albums

export const getArtistAlbums = (id) =>
  axios.get(`/artists/${id}/albums?limit=50`);

// get related artists

export const getRelatedArtists = (id) =>
  axios.get(`/artists/${id}/related-artists`);

//  get artists top tracks

export const getArtistTopTracks = (id) =>
  axios.get(`/artists/${id}/top-tracks?market=GB`);

//get user playlist

export const getPlaylist = () => axios.get("/me/playlists?limit=50");

//get public playlist

export const getPublicPlaylist = () =>
  axios.get("/browse/featured-playlists?country=GB");

//get followed artists

export const getFollowedArtist = () => axios.get("/me/following?type=artist");

// get playlist tracks

export const getPlaylistTracks = (playlist_id) =>
  axios.get(`/playlists/${playlist_id}`);

//get search item

export const getSearchItem = (input) =>
  axios.get(`/search?q=artist:${input}&type=track`);

// get featured playlist

export const getFeaturedPlaylist = () =>
  axios.get("/browse/featured-playlists?country=US");
