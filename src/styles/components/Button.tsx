import { ReactElement } from "react";
import { loadingIcon } from "../../utils/Icons";
import { IButton } from "./@types";

export const Button = ({
  isLoading,
  value,
  color = "bg-primary-20",
  hover = "hover:bg-primary-10",
  type = "submit",
  size = "px-20 py-3",
  className,
}: IButton): ReactElement => {
  return !isLoading ? (
    <button
      className={`${className} ${color} ${hover} ${type} ${size} duration-300 rounded-md font-semibold text-white uppercase my-3`}
    >
      {value}
    </button>
  ) : (
    <button
      type="button"
      className={`${className} ${color} cursor-no-drop flex justify-center gap-x-4 duration-300 px-20 py-3 opacity-75 rounded-md font-semibold text-white uppercase my-3`}
      disabled
    >
      {loadingIcon}
      Aguarde...
    </button>
  );
};
