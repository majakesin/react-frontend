import React from "react";
import * as yup from "yup";

const RegisterShema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .email("Email field must be like example@example.com"),
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  password: yup.string().required("Required").min(6, "Minimum 6 characters."),
  password_confirmation: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export default RegisterShema;
