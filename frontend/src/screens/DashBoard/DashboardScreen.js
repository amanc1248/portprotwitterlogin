import React from "react";
import "../../styles/DashboardScreen.css";
function DashboardScreen({ user }) {
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };
  return (
    <div className="dashboard__screen">
      <div className="dashbaord__screen__inner">
        <img
          src="https://www.portpro.io/assets/images/logo.png"
          alt="portpro"
          height="30px"
        />
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <span>Username: {user.displayName}</span>
        </div>
        <button className="logout__button" onClick={logout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default DashboardScreen;
