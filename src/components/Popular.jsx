import React from 'react'
import { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard'

const token = import.meta.env.VITE_TMDB_TOKEN

const Popular = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error('Error fetching movies:', err))
  }, [])

  return (
    <div>
      <h2>Popular Television</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'>
        {movies.map((movie) => (
          <TrendingCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {console.log(movie)}
            {movie.name} ({movie.first_air_date})
            <img
              // w92, w154, w342, w500, w780, original
              src={'https://image.tmdb.org/t/p/w780' + movie.poster_path}
              alt='TV Show Poster'
            />
            <img
              // w300, w780, w1280, original
              src={`https://image.tmdb.org/t/p/w780` + movie.backdrop_path}
              alt='TV Show Backdrop'
            />
            {movie.overview}
            Popularity: {movie.popularity}
            Vote Count{movie.vote_count} Vote Average{movie.vote_average}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Popular
