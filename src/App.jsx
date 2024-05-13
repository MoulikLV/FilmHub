import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

import { BrowserRouter, Route, Routes, json } from "react-router-dom";

function App() {

  const [watchlist,setWatchlist]=useState([])


  const handleAddtowatchlist=(movie)=>{
    let newWatchlist=[...watchlist,movie]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  const handleRemovefromwatchlist=(movie)=>{
   let filteredwatchlist=watchlist.filter((e)=>{
    
    return e.id!==movie.id;
    

   })
   setWatchlist(filteredwatchlist)
   localStorage.setItem('moviesApp', JSON.stringify(filteredwatchlist));
   console.log(filteredwatchlist)
  }

  useEffect(()=>{
    let movielocalstorage=localStorage.getItem('moviesApp')
    if(!movielocalstorage){
      return
    }
    setWatchlist(JSON.parse(movielocalstorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/><Movies handleAddtowatchlist={handleAddtowatchlist} handleRemovefromwatchlist={handleRemovefromwatchlist} watchlist={watchlist} /></>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleRemovefromwatchlist={handleRemovefromwatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

