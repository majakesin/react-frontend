import React from "react";
import "./css/movieCard.css";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch } from "react-redux";
import { movieLikeDislike, watchedMovie } from "../store/actions/movieActions";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const likeDislike = (movie, flag) => {
    dispatch(movieLikeDislike(movie, flag));
  };

  const queryParam = (movie) => {
    let query = "/one/movie?id=" + movie.id;
    movie.genres.forEach((genre) => {
      let temp = "&genres=" + genre;
      query += temp;
    });
    return query;
  };
  return (
    <div className="card col-sm-3" style={{ margin: "3%" }}>
      <div className="panel panel-primary">
        <div className="panel-heading" style={{ margin: "3%" }}>
          <h3>{movie.title}</h3>
        </div>
        <div className="panel-body">
          <p style={{ margin: "3%" }}>{movie.description}</p>
          <img
            src={movie.cover_image}
            className="img-responsive"
            style={{ width: "95%", margin: "3%", height: "240px" }}
            alt="movie"
          ></img>

          <div className="panel-footer like" style={{ marginBottom: "3%" }}>
            <div
              className="row"
              style={{ marginLeft: "30%", marginBottom: "5%" }}
            >
              <i
                class="fa fa fa-thumbs-up"
                onClick={() => {
                  likeDislike(movie, true);
                }}
              ></i>
              <i style={{ marginLeft: "3%" }} class="fa fa fa-thumbs-down"></i>
            </div>

            <a href={queryParam(movie)} style={{ marginLeft: "20%" }}>
              About
            </a>
            {!movie.watched ? (
              <button
                onClick={() => {
                  dispatch(watchedMovie(movie.id));
                }}
                className="btn btn-outline-info"
              >
                Watched
              </button>
            ) : (
              <div
                style={{
                  backgroundColor: "red",
                  color: "white",
                  align: "center",
                }}
              >
                <p> Watched </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
