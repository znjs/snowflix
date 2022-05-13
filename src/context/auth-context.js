import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ encodedToken: "", user: {} });
  const login = async (email, password) => {
    try {
      let res = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      if (res.status) {
        const { encodedToken, foundUser } = res.data;
        localStorage.setItem("encodedToken", JSON.stringify(encodedToken));
        setUserData({ encodedToken: encodedToken, user: foundUser });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const signUp = async (email, password, otherData) => {
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
      }
    } catch (err) {
      console.error(err);
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
