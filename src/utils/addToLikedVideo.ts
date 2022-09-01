import axios from "axios";
import { AddToLikedVideo } from "types/util-types";
import { triggerToast } from "./triggerToast";

const addToLikedVideo: AddToLikedVideo = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.post("/api/user/likes", { video }, { headers: { authorization: encodedToken } });
      triggerToast("success", "Video added to liked videos");
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToLikedVideo };
