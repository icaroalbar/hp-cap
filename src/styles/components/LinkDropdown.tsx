import { ReactElement } from "react";
import { ILinkContact } from "./@types";
import { Link } from "react-router-dom";

export const LinkDropdown = ({
  href,
  icon,
  value,
}: ILinkContact): ReactElement => {
  const linkDropNavStyle: string =
    "flex w-full gap-x-4 items-center py-2 px-8 transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-neutral-700";

  return (
    <Link to={`${href}`} className={linkDropNavStyle}>
      {icon}
      {value}
    </Link>
  );
};
