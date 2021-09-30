import React from "react";
import { useState } from "react";

function Login() {
  const [user, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUserId(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="enter user id" onChange={userHandler} />
        {userErr ? <span>User Not Valid</span> : ""}
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter user password"
          onChange={passwordHandler}
        />
        {passwordErr ? <span>Password Wrong</span> : ""}

        <br />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
