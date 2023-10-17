import React from 'react'
import Header from '../Header/Header'
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import MainContainer from '../MainContainer/MainContainer';
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}  
    </div>
  )
}

export default Browse