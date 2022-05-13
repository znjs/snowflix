import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Aside, Navbar } from "../../components";
import "./home.css";

function Home({ changeTheme, theme }) {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar changeTheme={changeTheme} theme={theme} />
      <div className='main-container fx'>
        <Aside />
        <>
          <Outlet />
        </>
      </div>
    </>
  );
}

export { Home };
