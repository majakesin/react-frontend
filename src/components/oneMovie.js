import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneMovie } from "../store/actions/movieActions";

const OneMoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    dispatch(getOneMovie(id));
  }, []);
  if (!movie) {
    return <div></div>;
  }
  return (
    <div className="card col-sm-12" style={{ margin: "3%" }}>
      <div className="panel panel-primary">
        <div className="panel-heading" style={{ margin: "3%" }}>
          <h3>{movie.title}</h3>
        </div>
        <div className="panel-body">
          <p style={{ margin: "3%" }}>{movie.description}</p>
          <img
            src={movie.cover_image}
            className="img-responsive"
            style={{ width: "95%", margin: "3%" }}
            alt="movie"
          ></img>

          <div className="panel-footer like" style={{ marginBottom: "3%" }}>
            <div
              className="row"
              style={{ marginLeft: "30%", marginBottom: "5%" }}
            >
              <p>Number of likes:</p>
              <p>Number of dislikes:</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneMoviePage;
