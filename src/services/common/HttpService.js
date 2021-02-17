import axios from "axios";

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
          // Ishendlati ovo kako ti odgovara ( tebi je mozda i 403 kod? )
          break;
        case 403:
          // skontati kako ispisati
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
