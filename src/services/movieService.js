import ApiService from "./common/ApiService";

const ENDPOINTS = {
  GET_MOVIES: "api/movies/movies/",
  GET_GENRES: "api/movies/genres/",
};
class MovieService extends ApiService {
  movies = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_MOVIES);
    return data;
  };

  genres = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_GENRES);
    return data;
  };
  createMovie = async (movieData) => {
    await this.apiClient.post(ENDPOINTS.GET_MOVIES, movieData);
  };

  oneMovie = async (id) => {
    const url = ENDPOINTS.GET_MOVIES + id + "/";
    const { data } = await this.apiClient.get(url);
    return data;
  };
}
const movieService = new MovieService();
export default movieService;
