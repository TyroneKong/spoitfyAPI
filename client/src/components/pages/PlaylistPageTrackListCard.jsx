import React, {useContext} from "react";
import "./PlaylistPageTrackListCard.scss";
import { CurrentTrackContext } from "../../App";



function PlaylistPageTrackListCard({ data}) {

const [currentlyPlayingTrack,setCurrentlyPlayingTrack] = useContext(CurrentTrackContext)



  const albumData = data.album;
  const artistData = data.artists;

  const handleClick=(id)=>{
    console.log(id)
    setCurrentlyPlayingTrack(id)
   
    
  }

  return (
    <div className="playlistPageTrackListCard">
      <img
      onClick={()=>handleClick(data.id)}
        className="playlistPageTrackListCard__image"
        src={albumData.images[0]?.url}
      ></img>
      <div className="playlistPageTrackListCard__title">
     
        <p>
      {data.name}

          <br />
          {artistData[0].name}
        </p>
      </div>
    </div>
  );
}

export default PlaylistPageTrackListCard;
