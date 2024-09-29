import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  // if movies is null, then come out of the function
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      {/* passing original_title and overview as props to <VideoTitle /> */}
      <VideoTitle title={original_title} overview={overview} />
      {/* passing id as prop to <VideoBackground /> */}
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
