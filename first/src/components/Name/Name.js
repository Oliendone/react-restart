import React from "react";

const Name = ({ nameValue, changeValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Your name"
        value={nameValue}
        onChange={changeValue}></input>
    </>
  );
};

export default Name;
