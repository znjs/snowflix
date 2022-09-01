import axios from "axios";
import { DeleteFromLiked } from "types/util-types";
import { triggerToast } from "./triggerToast";

const deleteFromLiked: DeleteFromLiked = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.delete(`/api/user/likes/${video._id}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Video removed form liked list");
    } catch (err) {
      console.error(err);
    }
  }
};

export { deleteFromLiked };
