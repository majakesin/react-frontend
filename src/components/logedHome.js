import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
import Pagination from "./pagination";
import Movies from "./movies";
import MovieModal from "./movieModal";
const LogedHome = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const next = useSelector((state) => state.movies.next);
  const previous = useSelector((state) => state.movies.previous);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="container">
      <MovieModal></MovieModal>
      <div className="row">
        <Movies movies={movies}></Movies>
      </div>
      <Pagination next={next} previous={previous}></Pagination>
    </div>
  );
};
export default LogedHome;
