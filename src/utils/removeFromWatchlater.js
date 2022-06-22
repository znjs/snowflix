import axios from "axios";
import { triggerToast } from "./triggerToast";

const removeFromWacthlater = async (video) => {
  const encodedToken = localStorage.encodedToken;
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Video removed from watch later");
    } catch (err) {
      console.error(err);
    }
  }
};

export { removeFromWacthlater };
