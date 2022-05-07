import TopTracksList from "../topTracksList/TopTracksList";

function TopTracks({ tracks, duration }) {
  return (
    <TopTracksList
      data={tracks}
  
      duration={duration}
    />
  );
}

export default TopTracks;
