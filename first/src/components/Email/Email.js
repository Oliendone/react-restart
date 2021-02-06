import React from "react";

const Email = ({ emailValue, changeValue }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Your email"
        value={emailValue}
        onChange={changeValue}></input>
    </>
  );
};

export default Email;