const SideBarMovieCard = ({ movie }) => {
  return (
    <div>
      <a
        style={{ backgroundColor: "darkcyan", color: "white" }}
        href={`/one/movie?id=${movie.id}`}
      >
        {movie.title}
      </a>
    </div>
  );
};
export default SideBarMovieCard;
