import React from 'react'

function Nav() {
  return (
    <nav className='flex items-center justify-between p-4 bg-gray-900 text-white shadow-md'>
      {/* Logo / Graphic */}
      <div className='flex items-center space-x-2'>
        <div className='w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center'>
          {/* Replace with <img src="/logo.png" /> if you have an image */}
          <span className='text-lg font-bold'>🎬</span>
        </div>
        <span className='text-xl font-semibold'>MyMovieApp</span>
      </div>

      {/* Nav Links */}
      <ul className='flex space-x-6 text-sm font-medium'>
        <li>
          <a href='/search' className='hover:text-blue-400 transition'>
            Search
          </a>
        </li>
        <li>
          <a href='/popular' className='hover:text-blue-400 transition'>
            TV Shows
          </a>
        </li>
        <li>
          <a href='/trending' className='hover:text-blue-400 transition'>
            Movies
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
