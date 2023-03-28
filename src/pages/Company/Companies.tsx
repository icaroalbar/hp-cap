import { ReactElement } from "react";
import { CompaniesCard } from "../../components/CompaniesCard";

const classNameGrid: string = `col-span-2 lg:col-span-1`;

export const Companies = (): ReactElement => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <article
        className={`${classNameGrid} flex flex-col justify-center lg:w-10/12`}
      >
        <h1 className="text-3xl font-light my-3 text-center lg:text-left">
          Demais Empresas
        </h1>
        <p className="text-justify text-xl mb-5">
          Conheça outras empresas do Grupo Hp com segmentos que possam atender
          em suas outras necessidades e se encante muito mais!
        </p>
      </article>
      <article className={`${classNameGrid}`}>
        <div className="grid grid-cols-2 gap-x-14 gap-y-5">
          <CompaniesCard
            src="/assets/images/logoBank.svg"
            alt="Logo HP Bank"
            title="HP Bank"
            site="https://www.hpbank.com.br/"
            info="Nossa securitizadora que realiza um melhor para os seus investimentos de forma segura e inteligente."
          />
          <CompaniesCard
            src="/assets/images/logoAga.svg"
            alt="Logo AGÁ Empreendimentos"
            title="AGÁ Empreendimentos"
            site="https://www.agaempreendimentos.com.br/"
            info="Somos uma das maiores contrutoras da cidade de Niterói no Rio de Janeiro, que atende grandes serviços de empreendimentos imobiliários."
          />
        </div>
      </article>
    </section>
  );
};
