import axios from "axios";
import { ClearHistory } from "types/util-types";
import { triggerToast } from "./triggerToast";

const clearHistory: ClearHistory = async () => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.delete("/api/user/history/all", {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "History is cleared");
    } catch (err) {
      console.error(err);
    }
  }
};

export { clearHistory };
