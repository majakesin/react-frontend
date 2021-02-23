import * as yup from "yup";

const MovieShema = yup.object().shape({
  title: yup
    .string()
    .required("Required")
    .max(20, "Email field must be like example@example.com"),
  description: yup.string().required("Required"),
  cover_image: yup.string(),
});
export default MovieShema;
