// import React, { useState } from "react";
// import Styles from "./Contact.module.css";
// import Form from "./Form";
// import Result from "../Result/Result";

// const Contact = () => {
//   const [userInput, setUserInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   // const [results, setResults] = useState([]);

//   // const [errors, setErrors] = useState({
//   //   name: "",
//   //   email: "",
//   //   password: "",
//   // });

//   // const validateEmail = () => {
//   //   // Simple email validation
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   if (!emailRegex.test(input.email)) {
//   //     setErrors(false);
//   //   } else {
//   //     setErrors(true);
//   //   }
//   // };

//   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // const validateForm = () => {
//   //   const errors = {};
//   //   if (!userInput.name) {
//   //     errors.name = "Name is required";
//   //   } else if (userInput.name <= 5) {
//   //     errors.name = "Name should be atleast 5 characters";
//   //   }

//   //   if (emailRegex.test(!userInput.name)) {
//   //     errors.email = "Email is required";
//   //   }

//   //   if (!userInput.password) {
//   //     errors.password = "Password is required";
//   //   } else if (!userInput.password > 8) {
//   //     errors.password = "Password should be atleast 5 characters";
//   //   }
//   //   setErrors(errors);
//   //   return Object.keys(errors).length === 0;
//   // };

//   const handleInput = (identifier, newValue) => {
//     setUserInput((prevInput) => {
//       return { ...prevInput, [identifier]: newValue };
//     });
//     // validateForm();
//   };

//   const onInputSubmitHanlder = (e) => {
//     // const userData = {
//     //   name: userInput.name,
//     //   phoneNumber: userInput.phoneNumber,
//     //   email: userInput.email,
//     // };
//     e.preventDefault();
//     setResults(userInput);
//     // console.log(userInput);
//     // if (!validateForm()) {
//     //   return;
//     // }
//   };
//   return (
//     <div className={Styles["contact-form"]}>
//       <Form
//         input={userInput}
//         onChangeForm={handleInput}
//         onSubmitInput={onInputSubmitHanlder}
//         // errors={errors}
//       />
//       <Result getInputData={results} />
//       {/* {results} */}
//     </div>
//   );
// };

// export default Contact;
