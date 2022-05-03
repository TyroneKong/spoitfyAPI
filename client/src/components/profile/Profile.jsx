import React, { useState, useEffect } from "react";
import "./Profile.scss";
import TopArtists from "../topArtists/TopArtists";
import TopTracks from "../topTracks/TopTracks";
import { getTopArtists } from "../spotify";
import { getTopTracks } from "../spotify";

function Profile({ name, picture, followers, currentTrack }) {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [topArtistsDataReceived, setTopArtistsDataReceived] = useState(false);
  const [topTracksDataReceived, setTopTracksDataReceived] = useState(false);

  useEffect(() => {
    fetchArtists();
    fetchData();
  }, []);

  // applied conditional rendering based on whether the data was received

  const fetchArtists = () => {
    getTopArtists()
      .then(
        (response) =>
          response.status === 200 && setArtists(response.data.items),
        setTopArtistsDataReceived(true)
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = () => {
    getTopTracks()
      .then((response) => {
        response.status === 200 && setTracks(response.data.items),
          setTopTracksDataReceived(true);
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="profile">
      <div className="profile__image-container">
        <img className="profile__image" src={picture}></img>
        <h2 className="profile__name">{name}</h2>
        <p>{followers} follower</p>
      </div>
      {topArtistsDataReceived && topTracksDataReceived ? (
        <>
          <TopArtists artist={artists} />
          <TopTracks currentTrack={currentTrack} tracks={tracks} />
        </>
      ) : null}
    </div>
  );
}

export default Profile;
