import axios from "axios";
import { triggerToast } from "./triggerToast";

const deleteFromHistory = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/history/${video._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      triggerToast("success", "Video removed from history");
    } catch (err) {
      console.error(err);
    }
  }
};

export { deleteFromHistory };
