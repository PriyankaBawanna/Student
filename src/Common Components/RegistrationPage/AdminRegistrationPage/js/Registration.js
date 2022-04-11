import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeLink from "../../../../Components/Home/js/HomeLink";

const Registration = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordMessage, setPasswordErrorMessage] = useState(false);
  const [user, setUserName] = useState("");
  const [password, setPasswordName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleValidSignUp = (e) => {
    e.preventDefault();
    if (emailErrorMessage || userNameError || passwordMessage || userEmail) {
      return alert("please fix all the  error message");
    }
    if (user.length < 3 || password.length < 3) {
      return alert("please enter the valid information");
    }
  };

  const userNameHandler = (e) => {
    let inputValue = e.target.value.length;
    console.log(inputValue);
    if (inputValue <= 3) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    setUserName(inputValue);
  };

  const emailValidation = (ee) => {
    let emailVal = ee.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailVal)) {
      console.log("email is valid ");

      setEmailErrorMessage(false);
    } else {
      setEmailErrorMessage(true);
    }
    setUserEmail(emailVal);
  };

  const PasswordValidation = (e) => {
    let passkey = e.target.value;
    if (passkey <= 8) {
      setPasswordErrorMessage(true);
    } else {
      setPasswordErrorMessage(false);
    }
    setPasswordName(passkey);
  };

  return (
    <>
      <HomeLink />
      <h1>Admin Registration Page</h1>
      <form onSubmit={handleValidSignUp}>
        <div>
          <input
            type="text"
            placeholder="user name"
            onChange={userNameHandler}
          />
          {userNameError ? <span>user not valid</span> : ""}
        </div>
        <div>
          <input type="email" placeholder="email" onChange={emailValidation} />
          {emailErrorMessage ? <span>Enter a valid mail</span> : ""}
        </div>
        <div>
          <input
            type="password"
            placeholder="enter the password "
            onChange={PasswordValidation}
          />
          {passwordMessage ? <span>Enter 8 digit password </span> : ""}
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Registration;
