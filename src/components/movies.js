import React from "react";
import MovieCard from "./movieCards";

const Movies = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((item) => (
        <MovieCard movie={item} key={item.id}></MovieCard>
      ))}
    </div>
  );
};
export default Movies;
