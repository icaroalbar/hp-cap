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
          info="Trabalho duro é a chave para o sucesso. Mantedo-se motivado e concentrado nos objetivos, mesmo em grandes desafios, acreditamos e nunca deixamos de buscar maneiras de crescer."
        />
        <FoundersCard
          src="/assets/images/thais.jpg"
          alt="Imagem Thais Oliveira"
          name="Thais Oliveira"
          office="Sócia e co-fundadora"
          info="Nós do Grupo HP trabalhamos com determinação e entusiasmo, idempedente do desafio mantemos, o foco em busca do objetivo final para realizar grandes conquistas!."
        />
      </article>
    </section>
  );
};
