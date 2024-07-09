import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessMessage = (message) => {
  toast.success(message);
};

export default showSuccessMessage;
