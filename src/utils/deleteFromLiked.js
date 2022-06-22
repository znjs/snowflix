import axios from "axios";
import { triggerToast } from "./triggerToast";

const deleteFromLiked = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/likes/${video._id}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Video removed form liked list");
    } catch (err) {
      console.error(err);
    }
  }
};

export { deleteFromLiked };
