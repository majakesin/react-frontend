import React from "react";
import { Formik, Form, Field } from "formik";
import LoginShema from "./formikComponent/loginShema";
import CustomInputComponent from "./formikComponent/customInputComponent";
import { BrowserRouter, Link, StaticRouter } from "react-router-dom";
import { loginUser } from "../store/actions/userActions";
const Login = () => {
  const userSelector = (state) => state;

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginShema}
        onSubmit={(values) => {
          loginUser(values);
        }}
      >
        {({}) => (
          <Form>
            <Field
              name="email"
              component={CustomInputComponent}
              placeholder="email"
              className="form-control"
            ></Field>
            <Field
              name="password"
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
