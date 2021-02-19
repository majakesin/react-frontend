import React from "react";
import * as yup from "yup";

const LoginShema = yup.object().shape({
  email: yup
    .string()
    .required("Required")
    .email("Email field must be like example@example.com"),
  password: yup.string().required("Required").min(6, "Minimum 6 characters."),
});
export default LoginShema;
