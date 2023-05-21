import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  
  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul className='p-2 font-semibold'>
        <li> <Link to="/"> Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>
      <hr />
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul className='p-2 font-semibold'>
        <li>Trending</li>
        <li>Live</li>
        <li>Learning</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='p-2 font-semibold'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <hr />
      
      <hr />
    </div>
  )
}

export default Sidebar