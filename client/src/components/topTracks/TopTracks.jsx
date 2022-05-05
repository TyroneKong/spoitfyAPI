import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ currentTrack, tracks, duration }) {
  return (
    <TopTracksList
      data={tracks}
      currentTrack={currentTrack}
      duration={duration}
    />
  );
}

export default TopTracks;
