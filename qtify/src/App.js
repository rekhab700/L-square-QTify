import { useEffect, useState } from "react";
import React from "react"
import Navbar from "./Components/Navbar/Navbar";
// import Hero from "../Components/Hero/Hero"
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./Api/Api";

function App() {
  const [searchData, setSearchData] = useState();
  const[data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((value) => {
      setData((prevData) => {
        return {...prevData, [key]: value}
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)

  }, [])

  const { topAlbums=[], newAlbums=[], songs=[] } = data;


  return (
    <>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
     {/* placeholder component (replaced with childcomponent) */}
     <Outlet context={{data: {topAlbums, newAlbums, songs}}}/> 
    </>
  );
}

export default App;
