import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios"
import Pagination from "./Pagination";

function Movies({handleAddtowatchlist,handleRemovefromwatchlist,watchlist}) {
const [movies,setMovies]=useState([])

const [pageNo,setPageNo]=useState(1)

const [search,setSearch]=useState('')

function handlesearch(e){
  setSearch(e.target.value)

}

const handlePrev=()=>{
    if(pageNo>1){
      setPageNo(pageNo-1)
    }
   
}

const handleNext=()=>{
    setPageNo(pageNo+1)
}

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=46451de43d25bbf3d9e5933883e7cff5&language=en-US&page=${pageNo}`).then(function(res){
        setMovies(res.data.results)
        console.log(res)
    })
  },[pageNo])
   

  return (
    <div className="p-4">
      <div className="text-xl text-center font-bold p-4 m-5   ">
        Trending Movies
      </div>
      <div className="flex justify-center my-5  ">
        <input id="inputsmovies" className="h-[3rem] w-[14rem]  p-3 outline-none rounded-xl items-center mb-5 bg-gray-200/70 "   placeholder="Search Movies" type="text" value={search} onChange={handlesearch}/>
      </div>

      <div className="flex flex-row  flex-wrap justify-around gap-8 ">
      {movies.filter((movie)=>{
        return movie.original_title.toLowerCase().includes(search.toLowerCase())
      }).map((movie)=>{
        return <MovieCard key={movie.id} movie={movie} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} name={movie.original_title} releaseDate={movie.
          release_date} handleAddtowatchlist={handleAddtowatchlist} handleRemovefromwatchlist={handleRemovefromwatchlist} watchlist={watchlist}
          
          
        />
    })}
      
       
       
       
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;
