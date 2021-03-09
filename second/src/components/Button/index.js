import React from "react";

function Button({ value, changeInputState }) {
  return (
    <>
      <button onClick={changeInputState}>{value}</button>
    </>
  );
}

export default Button;
