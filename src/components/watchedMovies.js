import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
import Search from "./search";
import Pagination from "./pagination";
import Movies from "./movies";

const WatchedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const next = useSelector((state) => state.movies.next);
  const previous = useSelector((state) => state.movies.previous);
  let movies_watched = [];
  if (movies) {
    movies.forEach((movie) => {
      if (movie.watched === true) {
        movies_watched.push(movie);
      }
    });
  }

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (movies_watched.length > 0) {
    return (
      <div className="container">
        <div className="row">
          <Search></Search>
        </div>
        <div className="row">
          <Movies movies={movies_watched}></Movies>
        </div>
        <Pagination next={next} previous={previous}></Pagination>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default WatchedMovies;
