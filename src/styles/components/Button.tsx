import { ReactElement, ReactNode } from "react";
import { loadingIcon } from "../../utils/Icons";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  children,
  className,
  isLoading,
}: ButtonProps): ReactElement => {
  return (
    <button
      className={`${className} flex justify-center bg-gradient-to-r from-primary-10 to-primary-20 duration-300 text-white uppercase font-semibold py-3 w-full rounded-lg ${
        isLoading && `from-[#0F1A2E90] to-[#0F1A2E90] cursor-not-allowed`
      }`}
    >
      {isLoading ? loadingIcon : children}
    </button>
  );
};
