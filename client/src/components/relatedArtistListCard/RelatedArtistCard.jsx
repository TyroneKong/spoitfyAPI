import React from 'react'
import './RelatedArtistCard.scss'


function RelatedArtistCard({images, name}) {
  return (
    <div className='relatedartist__Image-container'>
    
    <img className='relatedartist__Image' src={images}></img>
    <p>{name}</p>
    <p>Artist</p>
    </div>
  )
}

export default RelatedArtistCard