import { ReactElement } from "react";
import {
  AiOutlineFileText,
  AiOutlineStar,
  AiOutlineStock,
} from "react-icons/ai";
import { CardPillars } from "../../components/CardPillars";

export const Pillars = (): ReactElement => {
  return (
    <section className="grid grid-cols-3 gap-x-12 gap-y-10">
      <CardPillars
        icon={<AiOutlineFileText />}
        title="missão"
        info="Atuar como um parceiro de confiança para nossos clientes, com inovações no mercado de planejamento estratégico. Fornecendo as melhores oportunidades e ajudando os nossos clientes a terem uma vida organizada, segura e que atenda suas próprias necessidades."
      />
      <CardPillars
        icon={<AiOutlineStar />}
        title="visão"
        info="Ser uma empresa reconhecida por sua competência e compromisso, com a inovação e qualidade dos serviços estratégicos oferecidos, garantindo a satisfação de nossos clientes."
      />
      <CardPillars
        icon={<AiOutlineStock />}
        title="valores"
        info="Preocupamo-nos com o bem estar de nossa sociedade de uma maneira geral. Nosso valor é pela vida. Queremos que nossos clientes tenham não só sua vida financeira estável, mas também tenham a mente tranquila, sabendo que o futuro de seus herdeiros e entes queridos está seguro e garantido."
      />
    </section>
  );
};
