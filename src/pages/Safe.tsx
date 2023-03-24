import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Helmet } from "react-helmet";
import { BsShieldShaded } from "react-icons/bs";
import { ProductPageStructure } from "../components/ProductPageStructure";

const info = `O seguro de vida é indicado para quem não deseja deixar seus
entes desamparados em caso de falecimento. Neste projeto a longo
prazo, um valor mensal é pago pelo titular do plano, que designa
os membros da família que irão receber o montante. Do mesmo
modo, os seguros de bens dão proteção a bens materiais como
carro ou casa`;

export default function Safe() {
  return (
    <>
      <Helmet>
        <title>Seguros</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <ProductPageStructure
        bgProduct="bg-safe"
        icon={<BsShieldShaded />}
        title="Seguros"
        info={info}
      />
      <Footer />
    </>
  );
}
