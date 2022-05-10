import React, {useState, useEffect} from 'react'
import SearchPageListCard from './SearchPageListCard'
import './SearchPageList.scss'
import {getArtistInfo, getArtistAlbums} from '../spotify'




function SearchPageList({data, artist}) {

    const [artistInfo, setArtistInfo] = useState([])
    const [artistImage, setArtistImage] = useState(null)
    const [artistName, setArtistName] = useState("")
    const [albumData, setAlbumData] = useState(null)








useEffect(()=>{
   artist!== null?
    getArtistInfo(artist).then(response=>{
        setArtistImage(response.data.images[0].url)
        setArtistName(response.data.name)
      

    })
    :console.log('no data')
    
    
})


useEffect(()=>{
    getArtistAlbums(artist).then(response=>{
        setAlbumData(response.data.items)
    })
})



  return (
    <div className='searchPage__list' >
        <div className='searchPage__artist-image-container'>
        <img className='searchPage__artist-image' src={artistImage}></img>

        <h2>{artistName}</h2>
        </div>

{albumData!==null?

albumData.map((item, index)=>{
    return(


        <SearchPageListCard albumData={item.images[0].url}   key={index} />



    )
}):console.log('no data to map')}


    </div>
  )
}

export default SearchPageList