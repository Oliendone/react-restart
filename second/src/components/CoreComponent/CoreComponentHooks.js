import React, { useState, useEffect } from "react";
import ChildrenComponent from "../ChildrenComponent";
import Button from "../Button";

export default function CoreComponentHooks() {
  const [input, setInput] = useState({
    email: "Ziz@mail.com",
    password: "123456",
    username: "Ziz",
    birthday: "01.02.1610",
    address: "Greenland",
    bio: "Drunk sailor",
  });

  const [buttonText, setButtonText] = useState("Change");
  const [inputsActivity, setInputsActivity] = useState(true);

  const onChangeInput = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    if (!inputsActivity) {
      setButtonText((prevText) => {
        prevText = "Save";
        return prevText;
      });
    } else {
      setButtonText((prevText) => {
        prevText = "Change";
        return prevText;
      });
    }
  }, [inputsActivity]);

  const onButtonClick = () => {
    setInputsActivity(!inputsActivity);
  };

  return (
    <>
      <ChildrenComponent
        name="email"
        label="Email"
        value={input.email}
        isDisabled={inputsActivity}
        onChangeValue={onChangeInput}>
        <ChildrenComponent
          name="password"
          label="Password"
          value={input.password}
          isDisabled={inputsActivity}
          onChangeValue={onChangeInput}>
          <ChildrenComponent
            name="username"
            label="Username"
            value={input.username}
            isDisabled={inputsActivity}
            onChangeValue={onChangeInput}>
            <ChildrenComponent
              name="birthday"
              label="Birthday"
              value={input.birthday}
              isDisabled={inputsActivity}
              onChangeValue={onChangeInput}>
              <ChildrenComponent
                name="address"
                label="Address"
                value={input.address}
                isDisabled={inputsActivity}
                onChangeValue={onChangeInput}>
                <ChildrenComponent
                  name="bio"
                  label="Bio"
                  value={input.bio}
                  isDisabled={inputsActivity}
                  onChangeValue={onChangeInput}
                />
              </ChildrenComponent>
            </ChildrenComponent>
          </ChildrenComponent>
        </ChildrenComponent>
      </ChildrenComponent>
      <Button changeInputState={onButtonClick} value={buttonText} />
    </>
  );
}
