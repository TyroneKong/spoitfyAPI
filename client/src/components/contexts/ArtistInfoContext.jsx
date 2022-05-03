import React, { createContext, useState, useEffect } from "react";

import { getArtistInfo } from "../spotify";

export const ArtistInfoContext = createContext();

export const ArtistInfoContextProvider = ({ children }) => {
  const [artistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    fetchArtistInfo();
  }, []);

  const fetchArtistInfo = () => {
    getArtistInfo("1Xyo4u8uXC1ZmMpatF05PJ").then((response) => {
      console.log(response.data);
      setArtistInfo(response.data);
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
