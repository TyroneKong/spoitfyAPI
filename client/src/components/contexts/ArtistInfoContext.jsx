import React, { createContext, useState, useEffect } from "react";

import { getArtistInfo } from "../spotify";

export const ArtistInfoContext = createContext();

export const ArtistInfoContextProvider = ({ children }) => {
  const [artistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    fetchArtistInfo();
  }, []);

  const fetchArtistInfo = () => {
    getArtistInfo("4iHNK0tOyZPYnBU7nGAgpQ").then((response) => {
      setArtistInfo(response.data);
      console.log(response.data);
    });
  };

  return (
    <>
      <ArtistInfoContext.Provider value={[artistInfo, setArtistInfo]}>
        {children}
      </ArtistInfoContext.Provider>
    </>
  );
};
