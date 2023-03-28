import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { IHead } from "./@types";

export const Head = ({ title }: IHead): ReactElement => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
