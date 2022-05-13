import "./TopTracksList.scss";
import { useContext } from "react";
import TopTracksCard from "../topTracksCard/TopTracksCard";
import { CurrentTrackContext } from "../../App";


function TopTracksList({ data, duration }) {


const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useContext(CurrentTrackContext)

  const handleClick = (track) => {
    setCurrentlyPlayingTrack(track)
  };

  return (
    <div className="TopTracksList">
      <div className="TopTracksList__heading">
        <p className="TopTracksList__title">
          <span className="TopTracksList__bold-title">
            Top tracks this month
          </span>
          <br />
          <span className="TopTracksList__unbold">only visible to you</span>
        </p>
      </div>

      {data.slice(0).map((track, index) => {
        return (
          <div className="track" key={index}>
            <TopTracksCard
              track={track}
              index={index}
              handleClick={handleClick}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TopTracksList;
