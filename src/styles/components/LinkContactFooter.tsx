import { ReactElement } from "react";
import { linkBaseFooterStyle } from "./LinkFooter";
import { ILinkContact } from "./@types";

export const LinkContact = ({
  href,
  icon,
  value,
}: ILinkContact): ReactElement => {
  const listContactFooterStyle: string = `${linkBaseFooterStyle} flex hover:no-underline hover:text-red-500 duration-300 ease-in-out`;

  const liContactFooterStyle: string =
    "mb-4 flex items-center md:justify-start";

  return (
    <li className={liContactFooterStyle}>
      <a href={href} className={listContactFooterStyle}>
        {icon}
        {value}
      </a>
    </li>
  );
};
