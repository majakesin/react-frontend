import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../store/actions/movieActions";
import "./css/sidebar.css";
import SideBarMovieCard from "./sideBarMovieCard";

export const SideBar = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);
  return (
    <div>
      <div class="sidebar-container">
        <div class="sidebar-logo">Top 5 movies</div>
        {popularMovies.map((item) => (
          <SideBarMovieCard key={item.id} movie={item}></SideBarMovieCard>
        ))}
      </div>
    </div>
  );
};
export default SideBar;
