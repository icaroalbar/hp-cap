import { ReactElement } from "react";
import { ILinkContact } from "./@types";
import { Link } from "react-router-dom";

export const Card = ({ href, icon, value }: ILinkContact): ReactElement => {
  return (
    <Link
      to={`${href}`}
      className="flex gap-x-5 text-xl font-medium text-primary-20 items-center rounded-lg bg-zinc-100 p-4 shadow-lg hover:bg-zinc-200 duration-150"
    >
      {icon}
      {value}
    </Link>
  );
};
