import React from "react";
import "./css/movieCard.css";
import "font-awesome/css/font-awesome.min.css";

const MovieCard = (movie) => {
  return (
    <div className="card col-sm-3" style={{ margin: "3%" }}>
      <div className="panel panel-primary">
        <div className="panel-heading" style={{ margin: "3%" }}>
          <h3>{movie.movie.title}</h3>
        </div>
        <div className="panel-body">
          <p style={{ margin: "3%" }}>{movie.movie.description}</p>
          <img
            src={movie.movie.cover_image}
            className="img-responsive"
            style={{ width: "95%", margin: "3%", height: "240px" }}
            alt="movie"
          ></img>

          <div className="panel-footer like" style={{ marginBottom: "3%" }}>
            <div
              className="row"
              style={{ marginLeft: "30%", marginBottom: "5%" }}
            >
              <i class="fa fa fa-thumbs-up"></i>
              <i style={{ marginLeft: "3%" }} class="fa fa fa-thumbs-down"></i>
            </div>
            <a
              href={`/one/movie?id=${movie.movie.id}`}
              style={{ marginLeft: "20%" }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
