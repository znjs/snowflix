import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import axios from "axios";
import { triggerToast } from "../utils";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ encodedToken: "", user: {} });

  const login = async (email, password) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      triggerToast("error", "Invalid email");
      return;
    }
    try {
      let res = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      if (res.status === 200) {
        const { encodedToken, foundUser } = res.data;
        localStorage.setItem("encodedToken", JSON.stringify(encodedToken));
        setUserData({ encodedToken: encodedToken, user: foundUser });
        navigate("/");
        triggerToast("success", "User logged in");
      }
    } catch (err) {
      console.error(err);
      if (err.message.slice(-3) === "404") {
        triggerToast("error", "User not found. SignUp");
      } else if (err.message.slice(-3) === "401") {
        triggerToast("error", "Wrong Password");
      } else {
        triggerToast("error", "Something went wrong try again");
      }
      // console.log(err.message.slice(-3));
    }
  };

  const signUp = async (email, password, otherData) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      triggerToast("error", "Invalid email");
      return;
    }
    try {
      let res = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        ...otherData,
      });
      if (res.status === 201) {
        const { encodedToken, createdUser } = res.data;
        localStorage.setItem("encodedToken", JSON.stringify(encodedToken));
        setUserData({ encodedToken: encodedToken, user: createdUser });
        navigate("/");
        triggerToast("success", "User signed up");
      }
    } catch (err) {
      console.error(err);
      console.log(err.message);
      if (err.message.slice(-3) === "422") {
        triggerToast("error", "User already exists");
      } else {
        triggerToast("error", "Something went wrong try again");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
