import axios from "axios";
import { DeleteFromHistory } from "types/util-types";
import { triggerToast } from "./triggerToast";

const deleteFromHistory: DeleteFromHistory = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.delete(`/api/user/history/${video._id}`, {
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
