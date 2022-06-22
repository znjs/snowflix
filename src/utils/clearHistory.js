import axios from "axios";
import { triggerToast } from "./triggerToast";

const clearHistory = async () => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.delete("/api/user/history/all", {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "History is cleared");
    } catch (err) {
      console.error(err);
    }
  }
};

export { clearHistory };
