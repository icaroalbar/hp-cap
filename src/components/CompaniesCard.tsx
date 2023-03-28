import { ReactElement } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ICompanyCard } from "./@types";

const classNameGrid: string = `col-span-2 lg:col-span-1`;

export const CompaniesCard = ({
  title,
  info,
  site,
  src,
  alt,
}: ICompanyCard): ReactElement => {
  return (
    <div className={classNameGrid}>
      <img src={src} className="mx-auto" alt={alt} width={150} />
      <h1 className="text-xl text-center mt-5">{title}</h1>
      <p className="text-justify my-5">{info}</p>
      <a
        href={site}
        target="_blank"
        className="gap-x-3 inline-flex items-center ease-in-out px-1 font-semibold"
      >
        Conheça <HiArrowNarrowRight />
      </a>
    </div>
  );
};
