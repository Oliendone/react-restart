import React, { Component } from "react";

import Form from "./Form/Form";
import Name from "./Name/Name";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import Button from "./Button/Button";

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

   onSubmitForm = (e) => {
      e.preventDefault();
      alert(`Hello, ${this.state.inputName}`);
   };

   render() {
      const { inputName, inputEmail, inputPhone } = this.state;

      return (
         <Form onSubmitClick={this.onSubmitForm}>
            <Name nameValue={inputName} changeValue={this.onChangeName} />
            <Email emailValue={inputEmail} changeValue={this.onChangeEmail} />
            <Phone phoneValue={inputPhone} changeValue={this.onChangePhone} />
            <Button />
         </Form>
      );
   }
}

export default App;
