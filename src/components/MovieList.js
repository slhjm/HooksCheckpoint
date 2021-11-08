import React from 'react'
import MovieCard from './MovieCard'

import './MovieList.css'




function MovieList({ movies, searchRate, searchTitle }) {
  return (
      <div className="movieList">
          {movies
              .filter(movie => movie.rate >= searchRate && movie.title.toString().toLowerCase().includes(searchTitle.toString().toLowerCase()))
              .map((element, index) => <MovieCard movie={element} key={index} />)}
      </div>
  )
}

export default MovieList
