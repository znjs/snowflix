import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { DefaultAuthContext } from "types/auth-types";
import { triggerToast } from "../utils";

const AuthContext = createContext<DefaultAuthContext>({} as DefaultAuthContext);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const [userData, setUserData] = useState({
    encodedToken: "",
    user: { firstName: "", lastName: "" },
  });

  const login = async (email: string, password: string) => {
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
        if (location.state) navigate(location.state?.from?.pathname);
        else navigate("/");
        triggerToast("success", "User logged in");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message.slice(-3) === "404") {
        triggerToast("error", "User not found. SignUp");
      } else if (err.message.slice(-3) === "401") {
        triggerToast("error", "Wrong Password");
      } else {
        triggerToast("error", "Something went wrong try again");
      }
    }
  };

  const signUp = async (email: string, password: string, otherData: {}) => {
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
    } catch (err: any) {
      console.error(err);
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
