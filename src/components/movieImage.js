import React from "react";

const MovieImage = ({ src, image_url_omdb }) => {
  return (
    <div>
      {!image_url_omdb ? (
        <img
          src={src}
          className="img-responsive"
          style={{ width: "95%", margin: "3%", height: "240px" }}
          alt="movie"
        ></img>
      ) : (
        <img
          src={image_url_omdb}
          className="img-responsive"
          style={{ width: "95%", margin: "3%", height: "240px" }}
          alt="movie"
        ></img>
      )}
    </div>
  );
};
export default MovieImage;
