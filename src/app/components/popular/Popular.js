import { getMovieByPath } from "../../utils/moviesClient";
import React from "react";
import MediaCard from "../media-card/MediaCard";

const Popular = async () => {
  const { results } = await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0,12);
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold">Les plus populaire</h2>
      <div className="flex gap-x-4 flex-wrap justify-center ">
        {popularMovies.map(movie => {
          return <MediaCard key={movie.id} media={movie}/>
        })}
      </div>
    </div>
  )
}

export default Popular;