import React from 'react'
import { Link } from 'react-router-dom'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w780'

const TrendingCard = ({ movie }) => {
  const {
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
    backdrop_path
  } = movie

  return (
    <Link
      to={movie.title ? `/detailmovie/${movie.id}` : `/detailtv/${movie.id}`}
    >
      <div className='bg-gray-800 rounded overflow-hidden shadow-md hover:shadow-lg transition'>
        {console.log(movie)}
        {backdrop_path ? (
          <img
            src={`${IMAGE_BASE}${backdrop_path}`}
            alt={title || name}
            className='w-full h-44 object-cover'
          />
        ) : (
          <div className='w-full h-44 bg-gray-700 flex items-center justify-center text-sm text-gray-400'>
            No Image
          </div>
        )}
        <div className='p-3 text-white text-sm space-y-1'>
          <h3 className='font-semibold text-base truncate'>{title || name}</h3>
          <p className='text-gray-400 text-xs'>
            {release_date || first_air_date || 'Unknown Date'}
          </p>
          <p className='text-yellow-400 text-xs'>⭐ {vote_average ?? 'N/A'}</p>
        </div>
      </div>
    </Link>
  )
}

export default TrendingCard
