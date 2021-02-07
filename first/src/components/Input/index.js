import React from "react";

const Input = ({ name, placeholder, type, emailValue, changeValue }) => (
   <input
      type={type}
      placeholder={placeholder}
      value={emailValue}
      onChange={changeValue}
      name={name}
   />
);

export default Input;
