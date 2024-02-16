import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...props} />
    </p>
  );
};

export default Input;
