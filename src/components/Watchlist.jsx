import React, { useState } from 'react'

function Watchlist({watchlist,handleRemovefromwatchlist}) {

  const [search,setSearch]=useState('')

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

    
  
  return (
  <>
   <div className='flex justify-center flex-wrap m-4'>
    <div className='flex rounded-lg  justify-center h-[2rem] w-[6rem] bg-gray-500/50 items-center text-white font-bold mx-3'>Action</div>
    <div className='flex rounded-lg  justify-center h-[2rem] w-[6rem] bg-gray-500/50 items-center text-white font-bold mx-3'>Action</div>
   </div>


   <div className='flex justify-center my-7  '>
      <input onChange={handleSearch} value={search} type='text' placeholder='Search Movies' className='h-[2rem] w-[15rem] bg-gray-200 outline-none rounded-lg px-3'/>
   </div>

   <div className=' overflow-hidden rounded-lg border border-gray-200 m-7  '>
    <table className='w-full text-gray-600 text-center ' >
        <thead className='border-b-2 rounded-xl '>
           <tr>
             <th>Name</th>
             <th>Ratings</th>
             <th>Popularity</th>
             <th>Genre</th>
           </tr>
        </thead>

        <tbody>

          {watchlist.filter((movie)=>{
            return movie.original_title.toLowerCase().includes(search.toLowerCase())
          }).map((movie)=>{
            return  <tr className='border-b-2'>
            <td className='flex items-center p-2'>
              <img className='h-[6rem] w-[6rem] p-2  '  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
              <div className='mx-4 font-serif'>{movie.original_title}</div>
            </td>

            <td>{movie.vote_average}</td>
            <td>{movie.popularity}</td>
            <td>Action</td>
            <td onClick={()=>handleRemovefromwatchlist(movie)} className='text-red-500 cursor-pointer'>Delete</td>
          </tr>
          })}
           

            
            
        </tbody>
        
        
    </table>
   </div>

   

  </>
  )
}

export default Watchlist
