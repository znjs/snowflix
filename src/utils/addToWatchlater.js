import axios from "axios";
import { triggerToast } from "./triggerToast";

const addToWatchlater = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.post(
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
