import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button/Button";
import Form from "./Form/Form";

export default function FApp(params) {
   const [name, setNameValue] = useState("");
   const [email, setEmailValue] = useState("");
   const [phone, setPhoneValue] = useState("");

   const onChangeNameInput = ({ target }) => {
      const { value } = target;

      setNameValue(value);
   };

   const onChangeEmailInput = ({ target }) => {
      const { value } = target;

      setEmailValue(value);
   };

   const onChangePhoneInput = ({ target }) => {
      const { value } = target;

      setPhoneValue(value);
   };

   const onSubmitForm = (e) => {
      e.preventDefault();
      alert([name, email, phone]);
   };
   return (
      <Form onSubmitClick={onSubmitForm}>
         <Input
            type="text"
            placeholder="Your name"
            name="name"
            nameValue={name}
            changeValue={onChangeNameInput}
         />
         <Input
            type="email"
            placeholder="Your email"
            name="email"
            emailValue={email}
            changeValue={onChangeEmailInput}
         />
         <Input
            type="phone"
            placeholder="Your phone"
            name="phone"
            phoneValue={phone}
            changeValue={onChangePhoneInput}
         />
         <Button />
      </Form>
   );
}
