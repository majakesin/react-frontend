import ApiService from "./common/ApiService";

const ENDPOINTS = {
  GET_MOVIES: "api/movies/movies/",
  GET_GENRES: "api/movies/genres/",
};
class MovieService extends ApiService {
  movies = ({ nextOrPrevious }) => {
    if (nextOrPrevious === undefined) {
      return this.apiClient.get(ENDPOINTS.GET_MOVIES);
    } else {
      return this.apiClient.get(nextOrPrevious);
    }
  };

  genres = () => {
    return this.apiClient.get(ENDPOINTS.GET_GENRES);
  };
  createMovie = (values, selectedGenres) => {
    const movie = new FormData();
    movie.append("title", values.title);
    movie.append("description", values.description);
    movie.append("cover_image", values.cover_image);

    let choosenGenres = selectedGenres.map((item) => {
      let genre = item.value;
      return genre;
    });
    movie.append("genres", choosenGenres);
    return this.apiClient.post(ENDPOINTS.GET_MOVIES, movie);
  };

  oneMovie = (id) => {
    const url = ENDPOINTS.GET_MOVIES + id + "/";
    return this.apiClient.get(url);
  };
}
const movieService = new MovieService();
export default movieService;
