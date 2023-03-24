import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Helmet } from "react-helmet";
import { BiHealth } from "react-icons/bi";
import { ProductPageStructure } from "../components/ProductPageStructure";

const info = `Ter saúde não precisa ser sinônimo de pagar caro. Nós da HP Capital entendemos isso e, por este motivo, oferecemos os melhores planos de saúde do mercado, com preços acessíveis e abrangência robusta.`;

export default function Health() {
  return (
    <>
      <Helmet>
        <title>Plano de saúde</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <ProductPageStructure
        bgProduct="bg-health"
        icon={<BiHealth />}
        title="Plano de saúde"
        info={info}
      />
      <Footer />
    </>
  );
}
