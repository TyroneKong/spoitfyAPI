import React, {useEffect, useState} from 'react'
import ArtistTopTracksList from '../artistTopTracksList/ArtistTopTracksList'
import { getArtistTopTracks } from '../spotify'
import './ArtistTopTracks.scss'


function ArtistTopTracks({artist}) {
const [artistTopTracks, setArtistTopTracks] = useState([])



useEffect(()=>{
  artist!== null &&
getArtistTopTracks(artist).then(response=>{
  console.log(response.data.tracks)
 setArtistTopTracks(response.data.tracks)
})
},[artist])


  return (                       
    <div className='artistTopTracks'>

<ArtistTopTracksList artist={artistTopTracks}/>

    </div>
  )
}

export default ArtistTopTracks