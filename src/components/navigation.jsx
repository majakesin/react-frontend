import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto" style={{ margin: "5px" }}>
          <Link to="/" style={{ color: "#F8F8FF" }}>
            Movies
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
          <Nav className="mr-auto" style={{ margin: "5px" }}>
            <Link to="/register" style={{ color: "#F8F8FF" }}>
              Register
            </Link>
          </Nav>
          <Nav className="mr-auto" style={{ margin: "5px" }}>
            <Link to="/login" style={{ color: "#F8F8FF" }}>
              Login
            </Link>
          </Nav>
        </Form>
      </Navbar>
    </BrowserRouter>
  );
};
export default Navigation;
