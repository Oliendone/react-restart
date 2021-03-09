import React, { Component } from "react";
import ChildrenComponent from "../ChildrenComponent";
import Button from "../Button";

class CoreComponent extends Component {
  state = {
    email: "Ziz@mail.com",
    password: "123456",
    username: "Ziz",
    birthday: "01.02.1610",
    address: "Greenland",
    bio: "Drunk sailor",
    inputsDisabled: true,
    buttonText: "Change",
  };

  onChangeInput = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = () => {
    this.setState({ inputsDisabled: !this.state.inputsDisabled });

    if (!this.state.inputsDisabled) {
      this.setState({ buttonText: "Change" });
    } else {
      this.setState({ buttonText: "Save" });
    }
  };

  render() {
    const {
      username,
      email,
      password,
      birthday,
      address,
      bio,
      inputsDisabled,
      buttonText,
    } = this.state;

    return (
      <>
        <ChildrenComponent
          name="email"
          label="Email"
          value={email}
          isDisabled={inputsDisabled}
          onChangeValue={this.onChangeInput}>
          <ChildrenComponent
            name="password"
            label="Password"
            value={password}
            isDisabled={inputsDisabled}
            onChangeValue={this.onChangeInput}>
            <ChildrenComponent
              name="username"
              label="Username"
              value={username}
              isDisabled={inputsDisabled}
              onChangeValue={this.onChangeInput}>
              <ChildrenComponent
                name="birthday"
                label="Birthday"
                value={birthday}
                isDisabled={inputsDisabled}
                onChangeValue={this.onChangeInput}>
                <ChildrenComponent
                  name="address"
                  label="Address"
                  value={address}
                  isDisabled={inputsDisabled}
                  onChangeValue={this.onChangeInput}>
                  <ChildrenComponent
                    name="bio"
                    label="Bio"
                    value={bio}
                    isDisabled={inputsDisabled}
                    onChangeValue={this.onChangeInput}></ChildrenComponent>
                </ChildrenComponent>
              </ChildrenComponent>
            </ChildrenComponent>
          </ChildrenComponent>
        </ChildrenComponent>
        <Button
          changeInputState={this.onButtonClick}
          value={buttonText}
          isDisabled={inputsDisabled}
        />
      </>
    );
  }
}

export default CoreComponent;
