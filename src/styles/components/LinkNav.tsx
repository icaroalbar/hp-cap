import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { ILink } from "./@types";

export const linkNavStyle: string =
  "block text-white hover:text-neutral-300 py-2 pr-2 capitalize transition duration-300 ease-in-out lg:px-5w";

export const LinkNav = ({ href, value }: ILink): ReactElement => {
  return (
    <li data-te-nav-item-ref>
      <Link
        className={linkNavStyle}
        to={`${href}`}
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        {value}
      </Link>
    </li>
  );
};
