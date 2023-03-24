import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Helmet } from "react-helmet";
import { BsFillGearFill } from "react-icons/bs";
import { ProductPageStructure } from "../components/ProductPageStructure";

const info = `Um empreendimento forte e competitivo precisa de uma base sólida e bem estruturada. Por esse motivo, oferecemos todo suporte para a construção do seu negócio.`;

export default function Structuring() {
  return (
    <>
      <Helmet>
        <title>Estruturação</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <ProductPageStructure
        bgProduct="bg-structuring"
        icon={<BsFillGearFill />}
        title="Estruturação de negócios"
        info={info}
      />
      <Footer />
    </>
  );
}
