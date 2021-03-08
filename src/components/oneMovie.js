import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentCard from "./commentCard";
import {
  getComments,
  getLikesDislikes,
  getOneMovie,
  getRelatedMovies,
} from "../store/actions/movieActions";
import CommentModal from "./commentModal";
import Movies from "./movies";
import PaginationComments from "./paginationComments";
import MovieImage from "./movieImage";
import { django_url } from "../constants/constants";

const OneMoviePage = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const likes = useSelector((state) => state.movies.likes);
  const dislikes = useSelector((state) => state.movies.dislikes);
  const comments = useSelector((state) => state.movies.comments);
  const next = useSelector((state) => state.movies.next);
  const previous = useSelector((state) => state.movies.previous);
  const relatedMovies = useSelector((state) => state.movies.relatedMovies);

  useEffect(() => {
    dispatch(getOneMovie(id));
    dispatch(getLikesDislikes(id));
    dispatch(getComments(undefined, id));
  }, []);

  useEffect(() => {
    if (movie) {
      dispatch(getRelatedMovies(movie.genres ? movie.genres : undefined));
    }
  }, [movie]);

  if (!movie) {
    return <div></div>;
  }

  return (
    <div>
      <div className="card col-7 " style={{ marginLeft: "20%" }}>
        <div className="panel panel-primary">
          <div className="panel-heading" style={{ margin: "3%" }}>
            <h3>{movie.title}</h3>
          </div>
          <div className="panel-body">
            <p style={{ margin: "3%" }}>{movie.description}</p>
            <div style={{ height: "10%" }}>
              <MovieImage
                src={django_url + movie.cover_image}
                image_url_omdb={movie.image_url_omdb}
              ></MovieImage>
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
      <div className="row" style={{ marginLeft: "0%", height: "10%" }}>
        <Movies movies={relatedMovies}></Movies>
      </div>
    </div>
  );
};
export default OneMoviePage;
