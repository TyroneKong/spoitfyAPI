import React from 'react'
import './ArtistTopTracksCard.scss'

function ArtistTopTracksCard({trackArtist, trackName, images}) {
  return (
    <div className='artistTopTracks__card'>
<div className='artistTopTracks__card-image-container'>

<img className='artistTopTracks__card-image' src={images}></img>
<p>{trackName}</p>
<p>{trackArtist}</p>


</div>


    </div>
  )
}

export default ArtistTopTracksCard