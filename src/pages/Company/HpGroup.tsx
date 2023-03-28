import { ReactElement } from "react";

export const HpGroup = (): ReactElement => {
  return (
    <section className="grid gap-10">
      <article className="grid grid-cols-3 gap-5">
        <div className="col-span-3 lg:col-span-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-light lg:hidden">Grupo HP</h1>
          <img
            src="/assets/images/grupoHp.jpg"
            alt="Logo do grupo HP"
            width={250}
            className="my-10"
          />
        </div>
        <div className="col-span-3 lg:col-span-2 flex flex-col items-start justify-center">
          <h1 className="text-3xl font-light my-3 hidden lg:block">Grupo HP</h1>
          <p className="text-justify lg:leading-loose">
            Somos o Grupo HP. Fundado na cidade de Niteró, somos uma organização
            que traga grandes serviços em vários segmentos que traga grandes
            realizações para nossos cliente, amigos e colaboradores de nosso
            grupo. Somo uma grande família que está para ajudar a realizar seus
            sonhos!
          </p>
        </div>
      </article>
      {/* <article className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1 bg-blue-300">
          Conheça mais sobre a nossa história em um vudeo explicativo em nosso
          canal no YouTube e se encate com a família do Grupo HP.
        </div>
        <div className="col-span-2 lg:col-span-1 bg-blue-300">
          <iframe
            src="https://www.youtube.com/embed/kPpvOzKWaqg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </article> */}
    </section>
  );
};
