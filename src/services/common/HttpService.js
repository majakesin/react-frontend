import axios from "axios";
import { Redirect } from "react-router-dom";
class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
    this.client.interceptors.response.use(
      this.handleSuccessResponse,
      this.handleErrorResponse
    );
  }
  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }
  removeHeaders(headerKeys) {
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  }
  handleSuccessResponse(response) {
    return response;
  }
  handleErrorResponse = (error) => {
    try {
      const { status } = error.response;
      switch (status) {
        case 401:
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.pathname = "/register";
          break;
        default:
          break;
      }
      return Promise.reject(error);
    } catch (e) {
      return Promise.reject(error);
    }
  };
  setUnauthorizedCallback(callback) {
    this.unauthorizedCallback = callback;
  }
}

const options = {
  // hardkoduj na odgovarajucu vrednost
  baseURL: "http://127.0.0.1:8000/",
};
const httpService = new HttpService(options);
export default httpService;
