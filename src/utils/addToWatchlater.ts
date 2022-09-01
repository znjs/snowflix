import axios from "axios";
import { AddToWatchlater } from "types/util-types";
import { triggerToast } from "./triggerToast";

const addToWatchlater: AddToWatchlater = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: encodedToken } },
      );
      triggerToast("success", "Video added to watchlater");
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToWatchlater };
