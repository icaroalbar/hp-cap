import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { BsShieldShaded } from "react-icons/bs";
import { ProductPageStructure } from "../../components/ProductPageStructure";
import { Head } from "../../utils/Head";

const info: string = `O seguro de vida é indicado para quem não deseja deixar seus
entes desamparados em caso de falecimento. Neste projeto a longo
prazo, um valor mensal é pago pelo titular do plano, que designa
os membros da família que irão receber o montante. Do mesmo
modo, os seguros de bens dão proteção a bens materiais como
carro ou casa`;

export default function Safe() {
  return (
    <>
      <Head title="Seguros" />
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
