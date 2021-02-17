import ApiService from "./common/ApiService";

//ovo je sve login,bez logout

const ENDPOINTS = {
  LOGIN_USER: "api/auth/login/",
  REGISTER_USER: "api/auth/register/",
};
class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }
  init = async () => {
    const token = this.getToken();
    const user = this.getUser();
    if (token && user) {
      this.setAuthorizationHeader();
    }
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Token ${token}`,
      });
    }
  };
  createSession = async (data) => {
    try {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token)); // dodala da se ubaci odma i token u local storage?
      await this.setAuthorizationHeader();
    } catch (e) {
      console.log(e);
    }
  };
  login = async (loginData) => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN_USER, loginData);
    await this.createSession(data);
    return data;
  };
  //dodato za registraciju
  register = async (registerData) => {
    const token = this.getToken();
    const user = this.getUser(); // ne moze kreirati novog ako je ulogovan
    if (!(token && user)) {
      await this.apiClient.post(ENDPOINTS.REGISTER_USER, registerData);
    }
  };
  getToken = async () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : undefined;
  };
  // dodala getUser
  getUser = async () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : undefined;
  };
}
const authService = new AuthService();

export default authService;
