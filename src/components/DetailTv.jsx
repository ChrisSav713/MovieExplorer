import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w500'

const DetailTv = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      {
        console.log(data)
      }
      setItem(data)
    }

    fetchDetail()
  }, [id])

  if (!item) return <div className='text-white p-4'>Loading...</div>

  return (
    <div className='max-w-5xl mx-auto p-6 text-white space-y-4'>
      <div className='flex flex-col md:flex-row gap-6'>
        <img
          src={`${IMAGE_BASE}${POSTER_SIZE}${item.poster_path}`}
          alt={item.title || item.name}
          className='w-full md:w-64 rounded shadow-md'
        />
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold'>{item.title || item.name}</h1>
          <p className='text-gray-300'>{item.overview}</p>
          <ul className='text-sm text-gray-400 space-y-1 mt-4'>
            <li>
              <strong>Release Date:</strong>{' '}
              {item.release_date || item.first_air_date || 'N/A'}
            </li>
            <li>
              <strong>Original Language:</strong>{' '}
              {item.original_language?.toUpperCase()}
            </li>
            <li>
              <strong>Popularity:</strong> {item.popularity}
            </li>
            <li>
              <strong>Vote Average:</strong> ⭐ {item.vote_average}
            </li>
            <li>
              <strong>Vote Count:</strong> {item.vote_count}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DetailTv
