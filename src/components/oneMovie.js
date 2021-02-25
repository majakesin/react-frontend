import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./commentCard";
import {
  getComments,
  getLikesDislikes,
  getOneMovie,
} from "../store/actions/movieActions";
import CommentModal from "./commentModal";
import PaginationComments from "./paginationComments";

const OneMoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const likes = useSelector((state) => state.movies.likes);
  const dislikes = useSelector((state) => state.movies.dislikes);
  const comments = useSelector((state) => state.movies.comments);
  const next = useSelector((state) => state.movies.next);
  const previous = useSelector((state) => state.movies.previous);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("id");
    dispatch(getOneMovie(id));
    dispatch(getLikesDislikes(id));
    dispatch(getComments(undefined, id));
  }, []);
  if (!movie) {
    return <div></div>;
  }

  return (
    <div className="card col-7 " style={{ marginLeft: "20%" }}>
      <div className="panel panel-primary">
        <div className="panel-heading" style={{ margin: "3%" }}>
          <h3>{movie.title}</h3>
        </div>
        <div className="panel-body">
          <p style={{ margin: "3%" }}>{movie.description}</p>
          <div style={{ height: "10%" }}>
            <img
              src={"http://127.0.0.1:8000" + movie.cover_image}
              className="img-responsive"
              style={{ width: "95%", margin: "3%" }}
              alt="movie"
            ></img>
          </div>
          <div className="panel-footer like" style={{ marginBottom: "3%" }}>
            <div
              className="row"
              style={{ marginLeft: "30%", marginBottom: "5%" }}
            >
              <p>Number of likes: {likes}</p>

              <p>Number of dislikes: {dislikes}</p>
              <p>Number of view: {movie.number_of_views}</p>
            </div>
            <div className="row" style={{ width: "100%" }}>
              <CommentModal
                movie_id={movie.id}
                style={{ marginLeft: "65%" }}
              ></CommentModal>
              <div className="column" style={{ width: "100%" }}>
                {comments.length > 0 &&
                  comments.map((item) => (
                    <CommentCard key={item.id} comment={item}></CommentCard>
                  ))}
              </div>
              <div>
                <PaginationComments
                  next={next}
                  previous={previous}
                ></PaginationComments>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneMoviePage;
