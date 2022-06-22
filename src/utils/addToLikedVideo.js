import axios from "axios";
import { triggerToast } from "./triggerToast";

const addToLikedVideo = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: encodedToken } },
      );
      triggerToast("success", "Video added to liked videos");
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToLikedVideo };
