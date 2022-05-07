import React, { createContext, useEffect, useState } from "react";
import { getPlaylist } from "../spotify";

export const PlaylistContext = createContext();

export const PlaylistContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    getPlaylist().then((response) => {
      setPlaylist(response.data.items);
      console.log(response.data);
    });
  };

  return (
    <>
      <PlaylistContext.Provider value={[playlist, setPlaylist]}>
        {children}
      </PlaylistContext.Provider>
    </>
  );
};
