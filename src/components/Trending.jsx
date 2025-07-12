import { useEffect, useState } from 'react'
import TrendingCard from './TrendingCard'

const token = import.meta.env.VITE_TMDB_TOKEN

function TrendingMovies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/week', {
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
      <h2>Trending Movies This Week</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'>
        {movies.map((movie) => (
          <TrendingCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {console.log(movie)}
            {movie.title} ({movie.release_date})
            <img
              // w92, w154, w342, w500, w780, original
              src={'https://image.tmdb.org/t/p/w780' + movie.poster_path}
              alt='Movie Poster'
            />
            <img
              // w300, w780, w1280, original
              src={`https://image.tmdb.org/t/p/w780` + movie.backdrop_path}
              alt='Movie Backdrop'
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

export default TrendingMovies
