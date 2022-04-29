import axios from "axios";

const LOCALSTORAGE_KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expires_in: "spotify_expires_in",
  timestamp: "spotify_timestamp",
};

// keys map

const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS, accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS, refreshToken),
  expires_in: window.localStorage.getItem(LOCALSTORAGE_KEYS, expiresTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS, timestamp),
};

/** checks if the amount of time that has elapsed between the timestamp in localstorage
 * and now is greater than the expiration time of 3600 seconds (1 hour)
 * @returns {bollean} whether or not the access token in localstorage has expired
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
      `/refresh_token>refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`
    );

    //Update localstorage values error
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
    [LOCALSTORAGE_KEYS.expiresTime]: urlParams.get("expires_in"),
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
