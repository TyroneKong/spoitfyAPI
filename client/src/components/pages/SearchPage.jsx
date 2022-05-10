import React, {useState, useEffect} from 'react'
import { getArtistInfo, getSearchItem } from "../spotify";
import SearchPageList from './SearchPageList';
import './SearchPage.scss'
import { responsiveFontSizes } from '@mui/material';



function SearchPage() {

const [searchInput, setSearchInput] = useState("")
const [searchData, setSearchData] = useState([])
const [artist, setArtist] = useState(null)




const handleChange=(e)=>{
setSearchInput(e.target.value)



}

useEffect(()=>{
    searchInput!==""?
    getSearchItem(searchInput).then(response=>{
        setSearchData(response.data.tracks.items)

    
        // const filteredArtist = searchData.filter(item => item.artists[0].name)
        // filteredArtist!== null?
     
       setArtist(searchData[0].artists[0].id)
        
    }).catch(err=>{
        console.log(err)
    }):null

},[searchInput])


    return (
    <div className='searchPage'>
<div className='searchPage__Input-container'>


<input className='searchPage__Input' onChange={(e)=>handleChange(e)} type="text" placeholder='Enter artist or album'></input>

<SearchPageList data={searchData} artist={artist}/>
    </div>

</div>

  )
}

export default SearchPage