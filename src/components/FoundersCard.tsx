import { ReactElement } from "react";
import { IFoundersCard } from "./@types";

export const FoundersCard = ({
  src,
  alt,
  info,
  name,
  office,
}: IFoundersCard): ReactElement => {
  return (
    <article className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left col-span-2 lg:col-span-1">
      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="m-4 block rounded-lg bg-primary-10 p-6 shadow-lg">
            <div className="md:flex md:flex-row">
              <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                <img src={src} className="rounded-full shadow-md" alt={alt} />
              </div>
              <div className="md:ml-6">
                <p className="mb-6 font-light text-zinc-300 text-justify">
                  {info}
                </p>
                <p className="text-xl font-normal text-secondary-30">{name}</p>
                <p className="mb-0 font-light text-sm italic text-zinc-300">
                  {office}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
