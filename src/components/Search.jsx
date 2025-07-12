import React from 'react'
import { useState } from 'react'
import TrendingCard from './TrendingCard'

const token = import.meta.env.VITE_TMDB_TOKEN

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
          query
        )}&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await res.json()
      setResults(data.results || [])
    } catch (err) {
      console.error('Search error:', err)
    }
  }

  return (
    <div className='p-6 max-w-3xl mx-auto'>
      <form onSubmit={handleSearch} className='flex gap-2 mb-6'>
        <input
          type='text'
          className='flex-grow px-4 py-2 rounded bg-gray-800 text-white border border-gray-600'
          placeholder='Search movies or TV shows...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'
        >
          Search
        </button>
      </form>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {results.map((item) => (
          <TrendingCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  )
}

export default Search
