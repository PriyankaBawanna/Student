import { useState } from "react";
import HomeLink from "../../../Components/Home/js/HomeLink";

const LoginPage = () => {
  const [LoginEmail, setLoginEmail] = useState("");
  const [loginEmailMessage, setloginEmailMessage] = useState(false);
  const [LoginPassword, setLoginPassword] = useState("");
  const [LoginPasswordMessage, setLoginPasswordMessage] = useState(false);

  const LoginHandler = (e) => {
    if (LoginEmail.length < 3 || LoginPassword.length < 8) {
      alert("please enter the valid information");
    } else {
      console.log("all good");
    }
    e.preventDefault();
  };

  const emailValidation = (ee) => {
    let emailVal = ee.target.value;

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailVal)) {
      console.log("email is valid ");

      setloginEmailMessage(false);
    } else {
      setloginEmailMessage(true);
    }
    setLoginEmail(regEx);
  };
  const CheckPassword = (e) => {
    let passkey = e.target.value;
    if (passkey <= 8) {
      setLoginPasswordMessage(true);
    } else {
      setLoginPasswordMessage(false);
    }
    setLoginPassword(passkey);
  };
  return (
    <>
      <HomeLink />
      <form onSubmit={LoginHandler}>
        <h1>Login</h1>
        <div>
          <input type="email" placeholder="email" onChange={emailValidation} />
          {loginEmailMessage ? <span>Enter a valid mail</span> : ""}
        </div>
        <div>
          <input
            type="password"
            placeholder="enter the password "
            onChange={CheckPassword}
          />
          {LoginPasswordMessage ? <span>Enter 8 digit password </span> : ""}
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default LoginPage;
