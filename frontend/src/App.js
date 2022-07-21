import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignUpScreen from "./screens/LoginScreen/SignupScreen";
import DashboardScreen from "./screens/DashBoard/DashboardScreen";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <SignUpScreen user={user}></SignUpScreen>
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <LoginScreen></LoginScreen>
            </>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <>
              <DashboardScreen></DashboardScreen>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            user ? (
              <DashboardScreen user={user}></DashboardScreen>
            ) : (
              <LoginScreen></LoginScreen>
            )
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
