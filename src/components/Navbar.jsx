import React from 'react'

import Logo from "../movielogo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border items-center space-x-6 pl-3 py-3'>
     
      <img className='w-[50px]'  src={Logo}/>
      

      <Link to='/'  className='text-blue-500 text-xl font-serif '>Home</Link>
      <Link to='/watchlist' className='text-blue-500 text-xl  font-serif'>WatchList</Link>
    </div>
  )
}

export default Navbar
