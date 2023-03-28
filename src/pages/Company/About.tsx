import { ReactElement } from "react";

const classNameGrid: string = `col-span-2 lg:col-span-1 text-primary-10`;

export const About = (): ReactElement => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <article className={`${classNameGrid} px-16 py-16 lg:py-32`}>
        <h4 className="capitalize text-lg">quem somos</h4>
        <h1 className="text-3xl font-light my-3">
          Melhorando a vida das pessoas
        </h1>
        <p className="text-justify lg:leading-loose">
          Somos a HP Capital, parceira das maiores seguradoras do Brasil,
          abrangendo segmentos financeiros, seguros e de consórcios. Oferecemos
          os melhores produtos e serviços capitais aos nossos clientes.
          Trabalhamos com soluções de forma ágil, simplificada e inovadora, com
          o melhor custo-benefício. Nossa atividade abrange um público amplo,
          que busca um atendimento de excelência.
        </p>
      </article>
      <article
        className={`${classNameGrid} bg-woman bg-cover bg-right`}
      ></article>
    </section>
  );
};
