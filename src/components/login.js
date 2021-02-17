import React from "react";
import { Formik, Form, Field } from "formik";
import LoginShema from "./formikComponent/loginShema";
import CustomInputComponent from "./formikComponent/customInputComponent";
import { BrowserRouter, Link, StaticRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/userActions";
const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (data) => dispatch(loginUser(data));

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginShema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <Field
              name="email"
              type="text"
              component={CustomInputComponent}
              placeholder="email"
              className="form-control"
            ></Field>
            <Field
              name="password"
              type="password"
              component={CustomInputComponent}
              placeholder="password"
              className="form-control"
            ></Field>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <p>Don't have an account?</p>
        <BrowserRouter>
          <Link to="/register">Register</Link>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default Login;
