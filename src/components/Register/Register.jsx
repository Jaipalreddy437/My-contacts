import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Styles from "./Register.module.css";

const Register = () => {
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
    //validateForm();
  };

  const onInputSubmitHanlder = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        userdata
      );
      toast.success("user registered");
    } catch (err) {
      toast.error(err.response.data.message)
    }
  };
  return (
    <div className={Styles["contact-form"]}>
      <h2 style={{ color: "#fff" }}>Register Form</h2>
      <form onSubmit={onInputSubmitHanlder}>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            name="username"
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
            name="email"
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
            name="password"
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

export default Register;
