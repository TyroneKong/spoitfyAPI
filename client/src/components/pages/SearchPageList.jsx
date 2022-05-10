import React, {useState, useEffect} from 'react'
import SearchPageListCard from './SearchPageListCard'
import './SearchPageList.scss'
import {getArtistInfo, getArtistAlbums} from '../spotify'




function SearchPageList({data, artist, searchInput}) {

    // const [artistImage, setArtistImage] = useState(null)
    const [albumData, setAlbumData] = useState(null)
//     const [artistName, setArtistName] = useState("")




// useEffect(()=>{
//    artist!== null?
//     getArtistInfo(artist).then(response=>{
//         setArtistImage(response.data.images[0].url)
//         setArtistName(response.data.name)
      

//     }).catch(err=>{
//         console.log(err)
//     })
//     :console.log('no data')
    
    
// },[searchInput])


useEffect(()=>{
    getArtistAlbums(artist).then(response=>{
        setAlbumData(response.data.items)
        console.log(response.data.items)
    }).catch(err=>{
        console.log(err)
    })
},[searchInput])


  return (


    
    <div className='searchPage__list' >
<h2>Albums</h2>

{albumData!==null?

albumData.slice(2,10).map((item, index)=>{
    return(


        <SearchPageListCard albumData={item.images[0].url}   key={index} name={item.name}/>



    )
}):console.log('no data to map')}


    </div>
  )
}

export default SearchPageList