import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import getArtistInfo from "../spotify";

export const ArtistInfoContext = createContext();

export const ArtistInfoContextProvider = ({ children }) => {
  const [ArtistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    fetchArtistInfo();
  }, []);

  const fetchArtistInfo = () => {
    getArtistInfo("1Xyo4u8uXC1ZmMpatF05P").then((response) => {
      console.log(response.data);
      setArtistInfo(response.data);
    });
  };

  return (
    <>
      <ArtistInfoContext.Provider value={[ArtistInfo, setArtistInfo]}>
        {children}
      </ArtistInfoContext.Provider>
    </>
  );
};
