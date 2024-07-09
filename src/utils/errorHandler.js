import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showApiErrorMessage = (error) => {
  if (error) {
    if (error.response && error.response.data.message) {
      return toast.error(error.response.data.message);
    } else if (error.data && error.data.message) {
      return toast.error(error.data.message);
    } else if (error.message) {
      return toast.error(error.message);
    } else if (typeof error === "string") {
      return toast.error(error);
    } else {
      return toast.error("An unknown error occurred. Please try again.");
    }
  } else {
    return toast.error("An unknown error occurred. Please try again.");
  }
};

export default showApiErrorMessage;
