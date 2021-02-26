import ApiService from "./common/ApiService";

const ENDPOINTS = {
  GET_MOVIES: "api/movies/movies/",
  GET_GENRES: "api/movies/genres/",
  LIKE_DISLIKE: "api/movies/like/",
  GET_LIKES_DISLIKES: "api/movies/like/",
  CREATE_COMMENT: "api/movies/comments/",
  WATCHED_MOVIE: "api/movies/watched/",
  GET_POPULAR: "api/movies/popular/",
  GET_RELATED: "api/movies/related/",
};
class MovieService extends ApiService {
  movies = (nextOrPrevious, title, genres) => {
    let value = undefined;
    if (genres !== undefined) {
      value = genres.value;
    }

    if (nextOrPrevious === undefined) {
      return this.apiClient.get(ENDPOINTS.GET_MOVIES, {
        params: { movie_search: title, genre: value },
      });
    } else {
      return this.apiClient.get(nextOrPrevious);
    }
  };
  relatedMovies = async (genres) => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_RELATED, {
      params: { genre: genres },
    });
    return data;
  };
  likeDislike = (movie, flag) => {
    const data = { movie_id: movie.id, type: flag };
    return this.apiClient.post(ENDPOINTS.LIKE_DISLIKE, data);
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

  getLikesDislikes = (movie_id) => {
    return this.apiClient.get(ENDPOINTS.GET_LIKES_DISLIKES, {
      params: { movie_id: movie_id },
    });
  };
  oneMovie = async (id) => {
    const url = ENDPOINTS.GET_MOVIES + id + "/";
    const { data } = await this.apiClient.get(url);
    return data;
  };

  getComments = (nextOrPrevious, movie_id) => {
    if (nextOrPrevious === undefined) {
      return this.apiClient.get(ENDPOINTS.CREATE_COMMENT, {
        params: { movie: movie_id },
      });
    } else {
      return this.apiClient.get(nextOrPrevious);
    }
  };

  getPopularMovies = () => {
    return this.apiClient.get(ENDPOINTS.GET_POPULAR);
  };
  createComment = (comment, movie_id) => {
    comment = {
      title: comment.title,
      description: comment.description,
      movie: movie_id,
    };
    return this.apiClient.post(ENDPOINTS.CREATE_COMMENT, comment);
  };
  watchedMovies = (movie_id) => {
    const movie = { movie_id: movie_id };
    return this.apiClient.post(ENDPOINTS.WATCHED_MOVIE, movie);
  };
}
const movieService = new MovieService();
export default movieService;
