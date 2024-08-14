"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

export default function MovieSearch(){

  const [movieResults, setMovieResults] = useState([]);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    console.log(results);
    setMovieResults([]);
  }



  return (
    <div className="">
      {/* <input type="text" placeholder="Saisir un nom de film ..." className="border py-1 px-2 rounded-md font-sans text-black min-w-80" onChange={e=>updateMovieSearch(e.target.value)}/> */}
      <DebounceInput minLength={2} debounceTimeout={500} onChange={e=>updateMovieSearch(e.target.value)} placeholder="Saisir un nom de film ..." className="border py-1 px-2 rounded-md font-sans text-black min-w-80"/>
    </div>
  )
}