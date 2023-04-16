import { Nav } from "../../components/Nav";
import { BiHealth } from "react-icons/bi";
import { ProductPageStructure } from "../../components/ProductPageStructure";
import { Head } from "../../utils/Head";

const info: string = `Ter saúde não precisa ser sinônimo de pagar caro. Nós da HP Capital entendemos isso e, por este motivo, oferecemos os melhores planos de saúde do mercado, com preços acessíveis e abrangência robusta.`;

export default function Health() {
  return (
    <>
      <Head title="Plano de saúde" />
      <Nav />
      <ProductPageStructure
        bgProduct="bg-health"
        icon={<BiHealth />}
        title="Plano de saúde"
        info={info}
      />
    </>
  );
}
