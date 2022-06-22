import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Mockman from "mockman-js";
import "./App.css";
import {
  Explore,
  FullLoader,
  History,
  LikedVideo,
  Playlist,
  SinglePlaylist,
  SingleVideo,
  Watchlater,
} from "./components";
import { useVideo } from "./context";
import { useTheme } from "./hooks/useTheme";
import { Forgot, Home, Login, PageNotFound, PrivateRoute, Signup, UserProfile } from "./pages";

function App() {
  const { changeTheme, theme } = useTheme();
  const { displayLoader } = useVideo();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div
      id={theme}
      className={`${theme === "light" ? "light" : ""} bg-clr-gray-800 h-screen p-rel`}>
      <FullLoader displayLoader={displayLoader} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route element={<Home changeTheme={changeTheme} theme={theme} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<Forgot />} />
          <Route path="/" element={<Explore />} />
          <Route path="/video/:videoId" element={<SingleVideo />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
          <Route
            path="/userProfile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <Playlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/watchlater"
            element={
              <PrivateRoute>
                <Watchlater />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/likedVideos"
            element={
              <PrivateRoute>
                <LikedVideo />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlist/:playlistId"
            element={
              <PrivateRoute>
                <SinglePlaylist />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
