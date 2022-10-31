import React from "react";
import { useField, ErrorMessage } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className="form-control shadow-none"
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
}

export default TextField;
