import React from "react";

const Submit = ({ emailValue, changeValue }) => {
   return (
      <>
         <input
            type="phone"
            placeholder="Your phone"
            value={emailValue}
            onChange={changeValue}></input>
      </>
   );
};

export default Phone;