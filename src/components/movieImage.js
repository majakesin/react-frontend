import React from "react";

const MovieImage = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        className="img-responsive"
        style={{ width: "95%", margin: "3%", height: "240px" }}
        alt="movie"
      ></img>
    </div>
  );
};
export default MovieImage;
