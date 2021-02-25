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

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      console.log(token);
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };
  createSession = async (data) => {
    try {
      localStorage.setItem("user", JSON.stringify(data.user)); //a ovde token
      localStorage.setItem("token", JSON.stringify(data.token)); // ovde je username, da mi je lakse preuzeti
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
    await this.apiClient.post(ENDPOINTS.REGISTER_USER, registerData);
  };
  getToken = () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : undefined;
  };
  // dodala getUser
  getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : undefined;
  };
}
const authService = new AuthService();

export default authService;
