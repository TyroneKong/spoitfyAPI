import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ currentTrack, tracks, duration }) {
  return (
    <div>
      <TopTracksList
        data={tracks}
        currentTrack={currentTrack}
        duration={duration}
      />
    </div>
  );
}

export default TopTracks;
