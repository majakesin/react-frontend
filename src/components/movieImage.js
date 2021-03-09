import React from "react";
import { django_url } from "../constants/constants";

const MovieImage = ({ list_photo, info_photo }) => {
  return (
    <div>
      {!list_photo ? (
        <img
          src={django_url + info_photo}
          className="img-responsive"
          style={{ width: "95%", margin: "3%", height: "240px" }}
          alt="movie"
        ></img>
      ) : (
        <img
          src={django_url + list_photo}
          className="img-responsive"
          style={{ width: "95%", margin: "3%", height: "240px" }}
          alt="movie"
        ></img>
      )}
    </div>
  );
};
export default MovieImage;
