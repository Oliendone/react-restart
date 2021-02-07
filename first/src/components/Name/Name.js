import React from "react";

const Name = ({ nameValue, changeValue }) => {
   return (
      <>
         <input
            type="text"
            placeholder="Your name"
            value={nameValue}
            onChange={changeValue}
            name="name"></input>
      </>
   );
};

export default Name;
