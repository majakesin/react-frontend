import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/movieActions";
import Pagination from "./pagination";
import Movies from "./movies";
import MovieModal from "./movieModal";
import Search from "./search";
import SideBar from "./sidebar";
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
      <SideBar></SideBar>
      <div className="row" style={{ marginLeft: "240px" }}>
        <MovieModal></MovieModal>
        <Search></Search>
      </div>
      <div className="row" style={{ marginLeft: "240px" }}>
        <Movies movies={movies}></Movies>
      </div>
      <div style={{ marginLeft: "240px" }}>
        <Pagination next={next} previous={previous}></Pagination>
      </div>
    </div>
  );
};
export default LogedHome;
