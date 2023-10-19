import React from 'react'
import { BG_URL } from '../../utils/constants'
import GptMovieSuggestions from '../GptMovieSuggestions/GptMovieSuggestions'
import GptSearchBar from '../GptSearchBar/GptSearchBar'

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
            <img className="" src={BG_URL} alt="logo" />
        </div>
        <div className="">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
    </>
  )
}

export default GptSearch