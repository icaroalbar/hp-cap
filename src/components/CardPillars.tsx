import { ReactElement } from "react";
import { ICardPillars } from "./@types";

export const CardPillars = ({
  icon,
  title,
  info,
}: ICardPillars): ReactElement => {
  return (
    <article className="col-span-3 lg:col-span-1">
      <div className="flex flex-col justify-center items-center gap-5 text-justify text-primary-10">
        <div className="text-6xl">{icon}</div>
        <div className="capitalize text-2xl">{title}</div>
        <div>{info}</div>
      </div>
    </article>
  );
};
