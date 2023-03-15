import { ReactElement } from "react";
import { ToogleIcon } from "../../utils/Icons";

export const ToogleButton = (): ReactElement => {
  return (
    <button
      className="border-0 bg-transparent py-3 text-xl leading-none transition-shadow duration-150 ease-in-out text-white lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContentX"
      aria-controls="navbarSupportedContentX"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="[&>svg]:w-8">{ToogleIcon}</span>
    </button>
  );
};
