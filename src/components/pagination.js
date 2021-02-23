import "font-awesome/css/font-awesome.min.css";
import { useDispatch } from "react-redux";
import { getMovies } from "../store/actions/movieActions";

const Pagination = ({ next, previous }) => {
  const dispatch = useDispatch();

  return (
    <nav>
      {previous && (
        <button
          onClick={() => {
            dispatch(getMovies(previous));
          }}
          className="btn btn-outline-info"
        >
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
      )}
      {next && (
        <button
          onClick={() => {
            dispatch(getMovies(next));
          }}
          className="btn btn-outline-info"
        >
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      )}
    </nav>
  );
};
export default Pagination;
