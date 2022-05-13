import React, {useEffect} from 'react'
import ArtistTopTracksList from '../artistTopTracksList/ArtistTopTracksList'
import { getArtistTopTracks } from '../spotify'



function ArtistTopTracks({artist}) {

useEffect(()=>{
  artist!== null &&
getArtistTopTracks(artist).then(response=>{
  console.log(response.data)
})
},[])


  return (
    <div>ArtistTopTracks


<ArtistTopTracksList artist={artist}/>

    </div>
  )
}

export default ArtistTopTracks