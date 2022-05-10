import React,{useEffect} from 'react'
import ArtistTopTracksCard from '../artistTopTracksCard/ArtistTopTracksCard'
import {getArtistTopTracks} from'../spotify'

function ArtistTopTracksList({artist}) {
    console.log(artist)


    useEffect(()=>{
        artist!==null?
        getArtistTopTracks(artist).then(response=>{
            console.log(response)
        }):null
    },[])
  
  
  
    return (
    <div>ArtistTopTracksList


        <ArtistTopTracksCard/>
    </div>
  )
}

export default ArtistTopTracksList