import React, {useState} from 'react'
import './SearchPageListCard.scss'



function SearchPageListCard({data, albumData, name}) {
    // const albumData = data.album
    





  return (
    <div className='searchPage__album'>
<div className='searchPage__album-image-container'>
{ albumData!== null ?
<img className='searchPage__album-image' src={albumData}></img> 

:null
}
<p>{name}</p>
</div>


    </div>
  )
}

export default SearchPageListCard