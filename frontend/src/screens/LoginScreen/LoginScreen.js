import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../actions/LoginActions";
function LoginScreen() {
  const dispatch = useDispatch();

  // twitter login function
  const twitterLogin = () => {
    dispatch(userLoginAction());
  };
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
        <button onClick={twitterLogin}>Login With Twitter</button>
      </div>
    </div>
  );
}

export default LoginScreen;
