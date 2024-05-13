import React from 'react'

function MovieCard({watchlist,movie,poster_path,name,handleAddtowatchlist,handleRemovefromwatchlist}) {

 function doesContain(movie){
  for (let i=0 ;i<watchlist.length ;i++){
    if(watchlist[i].id==movie.id){
      return true
    }
    
  }
   return false
  
 }

  return (
    <div className='h-[50vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end overflow-hidden'   style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
     
     {doesContain(movie)?<div onClick={()=>handleRemovefromwatchlist(movie)}  className='m-4 flex justify-center h-6 w-6 rounded-lg bg-gray-900'>&#10060;</div>:<div onClick={()=>handleAddtowatchlist(movie)} className='m-4 flex justify-center h-6 w-6 rounded-lg bg-gray-900' >
       &#10133;
     </div>}
     

      <div className='text-white font-bold text-center w-full p-2 bg-gray-900/20  mt-auto '>
        {name} &nbsp;&nbsp;
       
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default MovieCard
