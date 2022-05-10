import React from 'react'
import RelatedArtistList from '../relatedArtistsList/RelatedArtistList'
import './RelatedArtists.scss'


function RelatedArtists({artist}) {
  return (
    <div className='relatedartist'>

<RelatedArtistList artist={artist}/>

    </div>
  )
}

export default RelatedArtists