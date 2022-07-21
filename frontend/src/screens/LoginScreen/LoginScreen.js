import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../actions/userActions";
import "../../styles/LoginScreen.css";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
function LoginScreen() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, userLogin, error } = useSelector(
    (state) => state.userLoginReducer
  );
  const onSubmit = () => {
    console.log("Login button ran");
    if (username && password) {
      console.log("2");

      dispatch(userLoginAction(username, password));
    } else {
      setErrorMessage("Please fill all the fields");
    }
  };

  useEffect(() => {
    if (userLogin === "success") {
      navigate("/dashboard");
    }
  });

  const facebook = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };
  return (
    <div className="login__screen">
      <div className="login__screen__innerdiv">
        <img
          src="https://www.portpro.io/assets/images/logo.png"
          alt="portpr0"
          height="30px"
        />
        <h1>Login Form</h1>
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
        <br />
        {errorMessage && <Message variant="danger">{errorMessage}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading === true ? (
          <Loader></Loader>
        ) : (
          <button className="manual__signup__button" onClick={onSubmit}>
            LOGIN
          </button>
        )}
        <p>
          <span className="do_not_text"> Do not have an account? </span>
          <span className="sign_up_text">
            {" "}
            <Link to="/signup">Signup</Link>{" "}
          </span>
        </p>
        <div>OR</div>
        <br />
        <button className="facebook__login__button" onClick={facebook}>
          Login With Facebook
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
