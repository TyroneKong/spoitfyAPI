import React, { useState, useEffect } from "react";
import { getArtistInfo, getSearchItem } from "../spotify";
import SearchPageList from "./SearchPageList";
import "./SearchPage.scss";
import RelatedArtists from "../relatedArtists/RelatedArtists";
import ArtistTopTracks from "../artistsTopTracks/ArtistTopTracks";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [artist, setArtist] = useState("6M2wZ9GZgrQXHCFfjv46we");
  const [artistName, setArtistName] = useState("");
  const [artistImage, setArtistImage] = useState(null);

  useEffect(() => {
    artist !== null &&
      getArtistInfo(artist)
        .then((response) => {
          setArtistImage(response.data.images[0].url);
          setArtistName(response.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [searchInput]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    searchInput !== "" &&
      getSearchItem(searchInput)
        .then((response) => {
          setSearchData(response.data.tracks.items);

          setArtist(searchData[0].artists[0].id);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [searchInput]);

  return (
    <div className="searchPage">
      <div className="searchPage__Input-container">
        <input
          className="searchPage__Input"
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Enter artist or album..."
        ></input>

        <div className="searchPage__artist-image-container">
          <img className="searchPage__artist-image" src={artistImage}></img>
          <h2>{artistName}</h2>
        </div>
        {artist !== null && <ArtistTopTracks artist={artist} />}

        <SearchPageList
          searchInput={searchInput}
          data={searchData}
          artist={artist}
        />

        <RelatedArtists artist={artist} />
      </div>
    </div>
  );
}

export default SearchPage;
