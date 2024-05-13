import React from 'react'
import { Link } from 'react-router-dom'

function Banner({}) {
  return (
    <Link to="https://www.youtube.com/watch?v=BUt-Ncdff50&pp=ygUOaGFudW1hbiB0ZWFzZXI%3D" target='_blank' rel='noopener noreferrer' className='h-[75vh]  bg-cover flex items-end' style={{backgroundImage:`url(https://i.ytimg.com/vi/AvjvZ7q2apE/maxresdefault.jpg)`}}>
       <div className='text-white text-xl w-full text-center font-bold bg-gray-900/65 p-2' >HanuMan</div>
    </Link>
  )
}

export default Banner
