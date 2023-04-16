import { Link } from "react-router-dom";
import { Button } from "../styles/components/Button";
import { ReactElement } from "react";
import { IProductPageStructure } from "./@types";

export const ProductPageStructure = ({
  bgProduct,
  icon,
  title,
  info,
}: IProductPageStructure): ReactElement => {
  return (
    <section
      className={`${bgProduct} bg-cover bg-right lg:h-[80vh] flex items-center`}
    >
      <article className="grid grid-cols-2 gap-4 px-8 md:px-24 py-12">
        <aside className="col-span-2 md:col-span-1 text-justify bg-zinc-50 p-10 rounded-lg shadow-lg">
          <h1 className="flex items-center gap-x-4 text-2xl pb-2 border-b-2 border-primary-10 mb-5 text-justify">
            {icon} {title}
          </h1>
          <p>{info}</p>
          <div className="flex justify-center md:justify-start mt-5">
            <Link to="/contact">
              <Button className="bg-gradient-to-r px-12 from-primary-10 to-primary-20">
                saiba mais
              </Button>
            </Link>
          </div>
        </aside>
      </article>
    </section>
  );
};
