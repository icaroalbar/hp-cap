import { ReactElement } from "react";
import { IValueText } from "./@types";

export const linkBaseFooterStyle: string =
  "text-neutral-600 dark:text-neutral-200 hover:underline capitalize";

export const LinkFooter = ({ value }: IValueText): ReactElement => {
  const liFooterStyle: string = "mb-4";

  return (
    <li className={liFooterStyle}>
      <a href="#!" className={linkBaseFooterStyle}>
        {value}
      </a>
    </li>
  );
};
