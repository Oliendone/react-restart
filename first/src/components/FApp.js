import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button/Button";
import Form from "./Form/Form";

export default function FApp(params) {
  const [name, setInputValue] = useState("");
  console.log(name);
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
    alert(name);
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
        emailValue={name}
        changeValue={onChangeEmailInput}
      />
      <Input
        type="phone"
        placeholder="Your phone"
        name="phone"
        phoneValue={name}
        changeValue={onChangePhoneInput}
      />
      <Button />
    </Form>
  );
}
