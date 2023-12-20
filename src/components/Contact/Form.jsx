import axios from "axios";
import Styles from "./Form.module.css";
import React, { useState } from "react";

const Form = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = () => {
    const errors = {};
    if (userInput.name.length <= 5) {
      errors.name = "Name should be atleast 5 characters";
    }

    if (emailRegex.test(userInput.email)) {
      errors.email = "Email is required";
    }

    // if (userInput.password.length <= 8) {
    //   errors.password = "Password should be atleast 8 characters";
    // }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInput = (identifier, newValue) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [identifier]: newValue };
    });
    validateForm();
  };

  const onInputSubmitHanlder = (e) => {
    e.preventDefault();
    const userInputData = {
      name: userInput.name,
      // password: userInput.password,
      email: userInput.email,
    };
    validateForm();
    if (!validateForm()) {
      return;
    }
    props.onAddInput(userInputData);
    axios.post();
  };
  return (
    <div className={Styles["contact-form"]}>
      <form onSubmit={onInputSubmitHanlder}>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            required
            value={userInput.name}
            onChange={(e) => handleInput("name", e.target.value)}
            placeholder="Please enter Name"
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <label htmlFor="email">
          Mail
          <input
            type="text"
            required
            value={userInput.email}
            onChange={(e) => handleInput("email", e.target.value)}
            placeholder="Please enter Email"
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="password">
          Password
          <input
            type="text"
            required
            value={userInput.password}
            onChange={(e) => handleInput("password", e.target.value)}
            placeholder="Please enter password"
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
