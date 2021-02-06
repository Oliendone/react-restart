import React from "react";

const Form = ({ onSubmitClick, children }) => {
   return (
      <form name="Form about you" onSubmit={onSubmitClick}>
         {children}
      </form>
   );
};

export default Form;
