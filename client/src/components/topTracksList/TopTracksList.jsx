import "./TopTracksList.scss";
import TopTracksCard from "../topTracksCard/TopTracksCard";

function TopTracksList({ data, currentTrack, duration }) {
  const handleClick = (track) => {
    currentTrack(track);
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

      {data.slice(0, 7).map((track, index) => {
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
