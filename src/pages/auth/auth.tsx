import React, { useState } from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [authType, setAuthType]: any = useState("signup");
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Mawlana Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div>
        {authType === "signin" ? (
          <div className="a-right">
            <form className="infoForm authForm">
              <h3>Log In</h3>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="infoInput"
                  name="username"
                />
              </div>

              <div>
                <input
                  type="password"
                  className="infoInput"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div>
                <span
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={() => setAuthType("signup")}
                >
                  Don't have an account Sign up
                </span>
                <button className="button infoButton">Login</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="a-right">
            <form className="infoForm authForm">
              <h3>Sign up</h3>

              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastname"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="infoInput"
                  name="username"
                  placeholder="Usernames"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="infoInput"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="infoInput"
                  name="confirmpass"
                  placeholder="Confirm Password"
                />
              </div>

              <div>
                <span
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={() => setAuthType("signin")}
                >
                  Already have an account. Login!
                </span>
              </div>
              <button className="button infoButton" type="submit">
                Signup
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
