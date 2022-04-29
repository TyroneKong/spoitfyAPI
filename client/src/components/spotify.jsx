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

  return accessToken;
};

export const accessToken = getAccessToken();
