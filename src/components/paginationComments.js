import "font-awesome/css/font-awesome.min.css";
import { useDispatch } from "react-redux";
import { getComments } from "../store/actions/movieActions";

const PaginationComments = ({ next, previous }) => {
  const dispatch = useDispatch();

  return (
    <nav>
      {previous && (
        <button
          onClick={() => {
            dispatch(getComments(previous));
          }}
          className="btn btn-outline-info"
        >
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
      )}
      {next && (
        <button
          onClick={() => {
            dispatch(getComments(next));
          }}
          className="btn btn-outline-info"
        >
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
      )}
    </nav>
  );
};
export default PaginationComments;
