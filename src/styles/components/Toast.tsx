import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { IToast } from "./@types";

export const notify = ({ message, variant }: IToast) =>
  toast(message, {
    type: variant,
  });
