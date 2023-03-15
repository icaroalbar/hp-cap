import { ReactElement } from "react";
import { IColumnsFooter } from "./@types";

export const Columns = ({ value, children }: IColumnsFooter): ReactElement => {
  const titleColunsFooterStyle: string =
    "mb-4 flex items-center font-semibold uppercase md:justify-start";

  return (
    <ul>
      <h6 className={titleColunsFooterStyle}>{value}</h6>
      {children}
    </ul>
  );
};
