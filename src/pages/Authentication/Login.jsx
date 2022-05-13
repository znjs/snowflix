import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useVideo } from "../../context";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  const { setDisplayLoader } = useVideo();
  useEffect(() => {
    if (encodedToken) navigate("/");
    setDisplayLoader(false);
  }, []);
  return (
    <div className="w-full fx-col fx-jc-center fx-ai-center clr-gray-50">
      <div className="bg-clr-gray-900 pd-1 brd-sm w-24">
        <h2 className="ff-nunito pd-b-05 ta-center">Welcome back to Snowflix</h2>
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
            value={user.email}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, email: e.target.value }));
            }}
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
            value={user.password}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </div>
        <div className="fx fx-jc-sb fx-ai-center">
          <div className="pd-b-05">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me" className="select-none pd-i-05">
              Remember Me
            </label>
          </div>
          <p
            className="cr-pt clr-gray-400"
            onClick={() => {
              navigate("/forgotPassword");
            }}>
            Forgot Password?
          </p>
        </div>
        <button
          className="pd-b-05 w-full brd-sm bg-clr-gray-800 clr-gray-50 fw-600 mg-b-05"
          onClick={() => {
            if (!!user.email && !!user.password) {
              login(user.email, user.password);
            }
          }}>
          Login
        </button>
        <button
          className="pd-b-05 w-full brd-sm bg-clr-gray-800 clr-gray-50 fw-600  mg-b-05"
          onClick={() => {
            setUser({ email: "test@gmail.com", password: "test123" });
          }}>
          Demo Login
        </button>
        <div className="fx fx-jc-center">
          <span
            className="cr-pt"
            onClick={() => {
              navigate("/signup");
            }}>
            Create a new account <i className="fa-solid fa-angle-right f-075"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export { Login };
