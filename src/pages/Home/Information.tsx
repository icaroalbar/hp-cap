import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { Button } from "../../styles/components/Button";

export const Information = (): ReactElement => {
  return (
    <article className="grid grid-cols-2">
      <div className="col-span-2 bg-company py-20 bg-cover lg:col-span-1 flex justify-center items-center">
        <div className="w-3/4 text-primary-10 flex flex-col gap-y-5">
          <div className="border-b py-2 border-primary-10">
            <p className="capitalize text-xl font-light">quem somos</p>
          </div>
          <h1 className="text-3xl font-medium">
            Melhorando a vida das pessoas
          </h1>
          <div className="text-justify text-lg flex flex-col gap-y-5">
            <p>
              Somos a HP Capital, parceira das maiores seguradoras do Brasil,
              abrangendo segmentos financeiros, seguros e de consórcios.
            </p>
            <p>
              Oferecemos os melhores produtos e serviços capitais aos nossos
              clientes. Trabalhamos com soluções de forma ágil, simplificada e
              inovadora, com o melhor custo-benefício. Nossa atividade abrange
              um público amplo, que busca um atendimento de excelência.
            </p>
          </div>
          <h3 className="text-2xl font-light">
            Seu sucesso, nossa maior conquista!
          </h3>
          <Link target="_top" to="/contact">
            <Button>saiba mais</Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:!flex col-span-1 bg-companyImage bg-cover bg-right"></div>
    </article>
  );
};
