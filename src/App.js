import logo from "./logo.svg";
import "./App.css";
import "./components/footer";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="jumbotron"></div>

      <div className="navbar-container">
        <Navigation></Navigation>
      </div>

      <div className="container">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </div>
      <br></br>

      <footer className="container-fluid text-center">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
