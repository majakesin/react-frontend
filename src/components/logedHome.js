import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, getMovies } from "../store/actions/movieActions";
import MovieCard from "./movieCards";
import MovieModal from "./movieModal";
const LogedHome = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <div>
      <MovieModal></MovieModal>
      <div className="row">
        {movies.map((item) => (
          <MovieCard movie={item} key={item.id}></MovieCard>
        ))}
      </div>
    </div>
  );
};
export default LogedHome;
