import React, { Component } from "react";

import Form from "./Form/Form";
import Input from "./Input";
import Button from "./Button/Button";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         phone: "",
      };
   }

   onChangeInput = ({ target }) => {
      const { name, value } = target;

      this.setState({ [name]: value });
   };

   onSubmitForm = (e) => {
      e.preventDefault();
      alert(`Hello, ${JSON.stringify(this.state)}`);
   };

   render() {
      const { name, email, phone } = this.state;

      return (
         <Form onSubmitClick={this.onSubmitForm}>
            <Input
               type="text"
               placeholder="Your name"
               name="name"
               nameValue={name}
               changeValue={this.onChangeInput}
            />
            <Input
               type="email"
               placeholder="Your email"
               name="email"
               emailValue={email}
               changeValue={this.onChangeInput}
            />
            <Input
               type="phone"
               placeholder="Your phone"
               name="phone"
               phoneValue={phone}
               changeValue={this.onChangeInput}
            />
            <Button />
         </Form>
      );
   }
}

export default App;
