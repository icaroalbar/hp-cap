import { BiHealth } from "react-icons/bi";
import { Card } from "../../styles/components/Cards";
import {
  BsFillCarFrontFill,
  BsFillGearFill,
  BsShieldShaded,
} from "react-icons/bs";

export const Solutions = () => {
  return (
    <article className="flex justify-center">
      <div className="grid grid-cols-2">
        <div className="col-span-2 py-20 bg-gradient-to-r from-primary-20 to-primary-10 lg:col-span-1 flex justify-center items-center">
          <div className="w-3/4 text-white flex flex-col gap-y-5">
            <h1 className="text-3xl font-medium">
              Temos as melhores soluções para você!
            </h1>
            <div className="text-justify text-lg flex flex-col gap-y-5">
              <p>
                A HP Capital trabalha em vários setores com grandes serviços e
                produtos para nossos clientes com excelência em atendimento.
              </p>
              <p>
                Em respeito aos nossos clientes e colaboradores, a HP Capital
                ratifica que NÃO OFERECE CRÉDITO CONSIGNADO OU EMPRÉSTIMO. As
                atividades da HP Capital são baseadas exclusivamente apenas nos
                serviços citados acima.
              </p>
            </div>
            {/* <Button value="saiba mais" /> */}
          </div>
        </div>
        <div className="flex flex-col bg-company bg-cover justify-center items-center col-span-2 py-24 lg:col-span-1">
          <div className="flex flex-col">
            <div className="border-b border-primary-10 py-2 text-primary-10">
              <p className="capitalize text-xl font-light">soluções</p>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <Card href="/safe" icon={<BsShieldShaded />} value="Seguros" />
                <Card
                  href="/structuring"
                  icon={<BsFillGearFill />}
                  value="Estruturação de negócios"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Card
                  href="/health"
                  icon={<BiHealth />}
                  value="Plano de Saúde"
                />
                <Card
                  href="consortium"
                  icon={<BsFillCarFrontFill />}
                  value="Consórcio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
