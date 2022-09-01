import axios from "axios";
import { RemoveFromWacthlater } from "types/util-types";
import { triggerToast } from "./triggerToast";

const removeFromWacthlater: RemoveFromWacthlater = async (video) => {
  const encodedToken = localStorage.encodedToken;
  if (encodedToken) {
    try {
      await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Video removed from watch later");
    } catch (err) {
      console.error(err);
    }
  }
};

export { removeFromWacthlater };
