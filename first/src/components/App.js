import React, { Component } from "react";

import Form from "./Form/Form";
import Name from "./Name/Name";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import Button from "./Button/Button";

class App extends Component {
   state = {
      name: "",
      email: "",
      phone: "",
   };

   onChangeInput = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: value });
   };

   onSubmitForm = (e) => {
      e.preventDefault();
      alert(`Hello, ${this.state.inputName}`);
   };

   render() {
      const { name, email, phone } = this.state;

      return (
         <Form onSubmitClick={this.onSubmitForm}>
            <Name nameValue={name} changeValue={this.onChangeInput} />
            <Email emailValue={email} changeValue={this.onChangeInput} />
            <Phone phoneValue={phone} changeValue={this.onChangeInput} />
            <Button />
         </Form>
      );
   }
}

export default App;
