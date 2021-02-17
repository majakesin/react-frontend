import React from "react";
import { Formik, Form, Field } from "formik";
import RegisterShema from "./formikComponent/registerShema";
import CustomInputComponent from "./formikComponent/customInputComponent";
import { BrowserRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const handleRegister = (data) => dispatch(registerUser(data));
  return (
    <div className="container">
      <div style={{ margin: "120px" }}>
        <h3 style={{ color: "#696969" }}>Register</h3>
        <Formik
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={RegisterShema}
          onSubmit={handleRegister}
        >
          {() => (
            <Form>
              <Field
                name="username"
                type="text"
                component={CustomInputComponent}
                placeholder="email"
                className="form-control"
              ></Field>
              <Field
                name="first_name"
                type="text"
                component={CustomInputComponent}
                placeholder="first name"
                className="form-control"
              ></Field>
              <Field
                name="last_name"
                type="text"
                component={CustomInputComponent}
                placeholder="Last name"
                className="form-control"
              ></Field>
              <Field
                name="password"
                type="password"
                component={CustomInputComponent}
                placeholder="password"
                className="form-control"
              ></Field>
              <Field
                name="password_confirmation"
                type="password"
                component={CustomInputComponent}
                placeholder="password confirmation"
                className="form-control"
              ></Field>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </Form>
          )}
        </Formik>
        <p>Have an account?</p>
        <BrowserRouter>
          <Link to="/login">Login</Link>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default Register;
