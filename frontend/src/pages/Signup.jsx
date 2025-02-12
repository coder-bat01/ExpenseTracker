import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="login-box">
      <h2>Signup Form</h2>
      <form action="">
        <div className="user-box">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="password" required />
          <label>Confirm Password</label>
        </div>
        <button type="submit" className="glowing-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;