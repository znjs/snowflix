import { Route, Routes } from "react-router-dom";
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
import { Forgot, Home, Login, PrivateRoute, Signup, UserProfile } from "./pages";

function App() {
  const { changeTheme, theme } = useTheme();
  const { displayLoader } = useVideo();
  return (
    <div id={theme} className="bg-clr-gray-800 h-screen p-rel">
      <FullLoader displayLoader={displayLoader} />
      <Routes>
        <Route element={<Home changeTheme={changeTheme} theme={theme} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<Forgot />} />
          <Route path="/" element={<Explore />} />
          <Route path="/:videoId" element={<SingleVideo />} />
          <Route path="/mockman" element={<Mockman />} />
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
