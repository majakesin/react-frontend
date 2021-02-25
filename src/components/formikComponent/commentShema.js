import React from "react";
import * as yup from "yup";

const CommentShema = yup.object().shape({
  title: yup.string().required("Required").max(20, "Maximum 20 characters."),
  description: yup
    .string()
    .required("Required")
    .max(500, "Maximum 500 characters."),
});
export default CommentShema;
