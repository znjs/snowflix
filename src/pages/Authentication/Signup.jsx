import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useVideo } from "../../context";

function Signup() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const encodedToken = localStorage.getItem("encodedToken");
  const { setDisplayLoader } = useVideo();
  useEffect(() => {
    if (encodedToken) navigate("/");
    setDisplayLoader(false);
  }, []);
  return (
    <div className="w-full fx-col fx-jc-center fx-ai-center clr-gray-50">
      <div className="bg-clr-gray-900 pd-1 brd-sm w-24">
        <h2 className="ff-nunito pd-b-05 ta-center">Welcome to Snowflix</h2>
        <div className="pd-b-05 fx">
          <label htmlFor="firstName" className="w-5">
            First Name
          </label>
          <input
            className="fx-grow pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 brd-sm"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            onChange={(e) => setUser((prev) => ({ ...prev, firstName: e.target.value }))}
          />
        </div>
        <div className="pd-b-05 fx">
          <label htmlFor="lastName" className="w-5">
            Last Name
          </label>
          <input
            className="fx-grow pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 brd-sm"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={(e) => setUser((prev) => ({ ...prev, lastName: e.target.value }))}
          />
        </div>
        <div className="pd-b-05 fx">
          <label htmlFor="email" className="w-5">
            Email
          </label>
          <input
            className="fx-grow pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 brd-sm"
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@xyz.com"
            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div className="pd-b-05 fx">
          <label htmlFor="password" className="w-5">
            Password
          </label>
          <input
            className="fx-grow pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 brd-sm"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
          />
        </div>
        <button
          className="pd-b-05 w-full brd-sm bg-clr-gray-800 clr-gray-50 fw-600 mg-b-05"
          onClick={() => {
            if (!!user.email && !!user.password) {
              signUp(user.email, user.password, {
                firstName: user.firstName,
                lastName: user.lastName,
              });
            }
          }}>
          Sign Up
        </button>
        <div className="fx fx-jc-center">
          <span className="cr-pt" onClick={() => navigate("/login")}>
            <i className="fa-solid fa-angle-left f-075"></i> &nbsp;Back to Login
          </span>
        </div>
      </div>
    </div>
  );
}

export { Signup };
