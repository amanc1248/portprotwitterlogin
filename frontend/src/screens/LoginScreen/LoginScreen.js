import React from "react";

function LoginScreen() {
  return (
    <div>
      <h1>Twitter Login Form</h1>

      <div className="label__input">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>

      <div className="label__input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>

      <div className="label__input">
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" id="confirmpassword" />
      </div>
      <div className="manual__signup__button">
        <button>Signup</button>
      </div>
      <div>----------or--------</div>
      <div className="twitter__login__button">
        <button>Login With Twitter</button>
      </div>
    </div>
  );
}

export default LoginScreen;
