import React from "react";

function TwitterLoginScreen() {
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>

      <div className="manual__signup__button">
        <button>Login</button>
      </div>
    </div>
  );
}

export default TwitterLoginScreen;
