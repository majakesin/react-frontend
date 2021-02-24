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

const CustomUploadFileComponent = ({ field, errors, ...props }) => {
  return (
    <div className="form-group">
      {field.value ? (
        <div>{field.value.name}</div>
      ) : (
        <input
          type="file"
          {...field}
          {...props}
          style={getStyles(errors, field.name)}
          onChange={(event) => {
            props.form.setFieldValue(field.name, event.target.files[0]);
          }}
        />
      )}
      <ErrorMessage name={field.name}>
        {(msg) => <p style={{ color: "red" }}>{msg}</p>}
      </ErrorMessage>
    </div>
  );
};
export default CustomUploadFileComponent;
