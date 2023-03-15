import { BiHealth } from "react-icons/bi";
import { Button } from "../styles/components/Button";
import { Card } from "../styles/components/Cards";
import {
  BsFillCarFrontFill,
  BsFillGearFill,
  BsShieldShaded,
} from "react-icons/bs";

export const SectionTwo = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="flex flex-col justify-center items-center order-2 lg:order-1 col-span-2 py-24 lg:col-span-1 bg-gradient-to-r from-primary-20 to-primary-10">
        <div className="w-9/12 flex flex-col gap-y-5">
          <div className="border-b  border-zinc-100 py-2 text-zinc-100">
            <p className="capitalize text-xl font-light">soluções</p>
          </div>
          <div className="flex flex-col gap-5">
            <Card href="#" icon={<BsShieldShaded />} value="Seguros" />
            <Card
              href="#"
              icon={<BsFillGearFill />}
              value="Estruturação de negócios"
            />
            <Card href="#" icon={<BiHealth />} value="Plano de Saúde" />
            <Card href="#" icon={<BsFillCarFrontFill />} value="Consórcio" />
          </div>
        </div>
      </div>
      <div className="col-span-2 order-1 lg:order-2 py-20 bg-zinc-300 lg:col-span-1 flex justify-center items-center">
        <div className="w-3/4 text-primary-10 flex flex-col gap-y-5">
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
    </section>
  );
};
