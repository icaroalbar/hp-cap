import { ReactElement } from "react";
import { FacebookIcon, InstagranIcon, LinkedinIcon } from "../../utils/Icons";

export const SocialFooter = (): ReactElement => {
  const linkIconsFooterStyle: string =
    "mr-6 text-neutral-600 dark:text-neutral-200";

  return (
    <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
      <div className="mr-12 hidden lg:block">
        <span>Conecte-se conosco nas redes sociais:</span>
      </div>
      <div className="flex justify-center">
        <a href="#!" className={linkIconsFooterStyle}>
          {FacebookIcon}
        </a>
        <a href="#!" className={linkIconsFooterStyle}>
          {InstagranIcon}
        </a>
        <a href="#!" className={linkIconsFooterStyle}>
          {LinkedinIcon}
        </a>
      </div>
    </div>
  );
};
