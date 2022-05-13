import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback";

function SpotifyPlayerApp({currentlyPlayingTrack, token}) {
  return (
    <div className="spotifyPlayer">
    <SpotifyPlayer
      className="spotifyPlayer"
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
      showSaveIcon={true}
      autoPlay={true}
      play={true}
      token={token}
      uris={[`spotify:track:${currentlyPlayingTrack}`]}
      
        
      
    />
  </div>
  )
}

export default SpotifyPlayerApp