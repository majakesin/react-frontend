import React from "react";
import { ErrorMessage, getIn } from "formik";

const getStyles = (errors, fieldName) => {
  if (getIn(errors, fieldName)) {
    return {
      size: "50%",
      border: "1px solid red",
    };
  }
  return {
    size: "30%",
  };
};

const CustomInputComponent = ({ field, errors, ...props }) => {
  return (
    <div className="form-group">
      <input
        type={field.type}
        {...field}
        {...props}
        style={getStyles(errors, field.name)}
      />
      <ErrorMessage name={field.name}>
        {(msg) => <p style={{ color: "red" }}>{msg}</p>}
      </ErrorMessage>
    </div>
  );
};
export default CustomInputComponent;
