import React from "react";
import ArtistTopTracksCard from "../artistTopTracksCard/ArtistTopTracksCard";

function ArtistTopTracksList({ artist }) {
  console.log(artist);

  return (
    <div>
      ArtistTopTracksList
      {artist.slice(0, 4).map((tracks, index) => {
        return (
          <ArtistTopTracksCard
            key={index}
            trackArtist={tracks.artists[0].name}
            trackName={tracks.name}
            images={tracks.album.images[0].url}
          />
        );
      })}
    </div>
  );
}

export default ArtistTopTracksList;
