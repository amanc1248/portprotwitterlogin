import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction, userSignupAction } from "../../actions/userActions";
import "../../styles/LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
function SignUpScreen() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordMatch, setPasswordMatch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userSignup, error } = useSelector(
    (state) => state.userSignupReducer
  );
  // facebook login function
  const facebookLogin = async () => {
    dispatch(userSignupAction(username, password));
  };

  // signup function
  const onSubmit = () => {
    if (
      username &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      setPasswordMatch(true);
      dispatch(userSignupAction(username, password));
    } else {
      setPasswordMatch(false);
    }
  };

  useEffect(() => {
    if (userSignup === "success") {
      navigate("/dashboard");
    }
  });

  return (
    <div className="login__screen">
      <div className="login__screen__innerdiv">
        <img
          src="https://www.portpro.io/assets/images/logo.png"
          alt="portpr0"
          height="30px"
        />
        <h1>Signup Form</h1>
        <div className="label__input">
          <label htmlFor="email">Username</label>
          <br />
          <input
            type="text"
            id="email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="label__input">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="label__input">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirmpassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <br />
        {passwordMatch === false && (
          <Message variant="danger">{"Password did not match"}</Message>
        )}
        {error && <Message variant="danger">{error}</Message>}
        {loading === true ? (
          <Loader></Loader>
        ) : (
          <button className="manual__signup__button" onClick={onSubmit}>
            SIGNUP
          </button>
        )}
        <p>
          <span className="do_not_text"> Already have an account? </span>
          <span className="sign_up_text">
            {" "}
            <Link to="/login">Login</Link>{" "}
          </span>
        </p>
        <div>OR</div>
        <br />
        <button className="facebook__login__button" onClick={facebookLogin}>
          Login With Facebook
        </button>
      </div>
    </div>
  );
}

export default SignUpScreen;
