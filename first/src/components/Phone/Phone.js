import React from "react";

const Phone = ({ phoneValue, changeValue }) => {
   return (
      <>
         <input
            type="phone"
            placeholder="Your phone"
            value={phoneValue}
            onChange={changeValue}
            name="phone"></input>
      </>
   );
};

export default Phone;
