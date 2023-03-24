import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Button } from "../styles/components/Button";

export default function Safe() {
  return (
    <>
      <Nav />
      <div>
        <div className="bg-safe bg-cover bg-right lg:h-[80vh] flex items-center">
          <div className="grid grid-cols-2 gap-4 px-8 md:px-24 py-12">
            <div className="col-span-2 md:col-span-1 text-justify bg-zinc-50 p-10 rounded-lg shadow-lg">
              <h1 className="text-2xl pb-2 border-b-2 border-primary-10 mb-5 text-justify">
                Seguros
              </h1>
              <p>
                O seguro de vida é indicado para quem não deseja deixar seus
                entes desamparados em caso de falecimento. Neste projeto a longo
                prazo, um valor mensal é pago pelo titular do plano, que designa
                os membros da família que irão receber o montante. Do mesmo
                modo, os seguros de bens dão proteção a bens materiais como
                carro ou casa
              </p>
              <div className="flex justify-center md:justify-start mt-5">
                <Link to="/contact">
                  <Button
                    value="saiba mais"
                    className="bg-gradient-to-r from-primary-10 to-primary-20"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="my-5">
          <h1 className="text-2xl mb-3">
            Conheça nossas coberturas para encontrar o melhor plano para você!
          </h1>
          <p>
            A partir deste aspecto é preciso estar ciente de que, muitas das
            vezes, ao perder algum familiar, temos que lidar com gastos não
            planejados até a reestruturação financeira. Do mesmo modo, danos
            inesperados com bens materiais são, quase sempre, onerosos. A HP
            Capital é parceira das maiores seguradoras do país, tendo como foco
            oferecer a opção mais cômoda para o seu perfil econômico.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            Há vários planos de seguros e, com certeza, um deles se enquadra ao
            seu orçamento. Ficou interessado(a) em algum dos nossos serviços?
            Entre em contato conosco e tire suas dúvidas.
          </div>
          <div className="col-span-2 lg:col-span-1">
            Há vários planos de seguros e, com certeza, um deles se enquadra ao
            seu orçamento. Ficou interessado(a) em algum dos nossos serviços?
            Entre em contato conosco e tire suas dúvidas.
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
