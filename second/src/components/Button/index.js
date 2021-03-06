import React from "react";

function Button({ value, changeInputState, isDisabled }) {
  return (
    <>
      <button onClick={changeInputState}>{value}</button>
    </>
  );
}

export default Button;
