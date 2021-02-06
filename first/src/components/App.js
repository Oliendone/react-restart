import React, { Component } from "react";

import Form from "./Form/Form";
import Name from "./Name/Name";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";

class App extends Component {
  state = {
    inputName: "",
    inputEmail: "",
    inputPhone: "",
  };

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  onChangePhone = (e) => {
    this.setState({ inputPhone: e.target.value });
  };

  render() {
    const { inputName, inputEmail, inputPhone } = this.state;

    return (
      <Form>
        <Name nameValue={inputName} changeValue={this.onChangeName} />
        <Email emailValue={inputEmail} changeValue={this.onChangeEmail} />
        <Phone phoneValue={inputPhone} changeValue={this.onChangePhone} />
      </Form>
    );
  }
}

export default App;