import { ReactElement } from "react";
import { FoundersCard } from "../../components/FoundersCard";

export const Founders = (): ReactElement => {
  return (
    <section>
      <h1 className="text-3xl mb-10 pb-3 border-b-2 border-primary-10">
        Depoimentos
      </h1>
      <article className="grid grid-cols-2 gap-5">
        <FoundersCard
          src="/assets/images/hugo.jpg"
          alt="Imagem Hugo Ricardo"
          name="Hugo Ricardo"
          office="CEO"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cumque possimus similique rerum odit voluptates maxime incidunt."
        />
        <FoundersCard
          src="/assets/images/thais.jpg"
          alt="Imagem Thais Oliveira"
          name="Thais Oliveira"
          office="Sócia e co-fundadora"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cumque possimus similique rerum odit voluptates maxime incidunt."
        />
      </article>
    </section>
  );
};
