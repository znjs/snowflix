import React from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Aside, Navbar } from "../../components";
import "./home.css";

function Home({ changeTheme, theme }) {
  return (
    <>
      <Navbar changeTheme={changeTheme} theme={theme} />
      <div className="main-container fx">
        <Aside theme={theme} />
        <>
          <Outlet />
        </>
      </div>
    </>
  );
}

export { Home };
