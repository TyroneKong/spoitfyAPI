import React, {useState, useEffect} from 'react'
import RelatedArtistCard from '../relatedArtistListCard/RelatedArtistCard'
import {getRelatedArtists} from '../spotify'
import './RelatedArtistList.scss'



function RelatedArtistList({artist}) {
const [relatedArtistData, setRelatedArtistData] = useState([])


  useEffect(()=>{
      getRelatedArtists(artist).then(response=>{
          console.log(response.data.artists)
          setRelatedArtistData(response.data.artists)
      })
  },[artist])
  
  
    return (
    <div className='relatedartist__card'>
        <h2>Artists</h2>
{relatedArtistData.slice(0,8).map(data=>{
return (
<RelatedArtistCard images={data.images[0]?.url} name={data.name} />


)



})


}


    </div>
  )
}

export default RelatedArtistList