import React, { useState, useEffect } from "react";
import "./Profile.scss";
import TopArtists from "../topArtists/TopArtists";
import TopTracks from "../topTracks/TopTracks";
import PublicPlaylist from "../publicPlaylist/PublicPlaylist";
import { getTopArtists, getTopTracks } from "../spotify";

function Profile({ name, picture, followers }) {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [topArtistsDataReceived, setTopArtistsDataReceived] = useState(false);
  const [topTracksDataReceived, setTopTracksDataReceived] = useState(false);

  // function to convert milliseconds to minutes
  function msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;

    return mins + ":" + secs;
  }

  useEffect(() => {
    fetchArtists();
    fetchData();
  }, []);

  //get top artists data
  const fetchArtists = async () => {
    try {
      const response = await getTopArtists();
      response.status === 200 && setArtists(response.data.items),
        setTopArtistsDataReceived(true);
    } catch (error) {
      console.log(error);
    }
  };

  //get top tracks data

  const fetchData = async () => {
    try {
      const response = await getTopTracks();

      response.status === 200 && setTracks(response.data.items),
        setTopTracksDataReceived(true);
    } catch (error) {
      console.log(error);
    }
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
          <TopTracks tracks={tracks} duration={msToTime} />
        </>
      ) : null}
      <PublicPlaylist />
    </div>
  );
}

export default Profile;
