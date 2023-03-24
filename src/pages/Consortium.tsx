import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Helmet } from "react-helmet";
import { BsFillCarFrontFill } from "react-icons/bs";
import { ProductPageStructure } from "../components/ProductPageStructure";

const info = `Os consórcios da HP Capital são uma opção interessante para quem busca poupar dinheiro, a fim de obter um montante a médio prazo ou longo prazo. Com um valor mensal pré-definido, o participante do consórcio conta com um modelo menos burocrático e mais vantajoso que um financiamento, já que os juros costumam ser menores.`;

export default function Consortium() {
  return (
    <>
      <Helmet>
        <title>Consórcio</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <ProductPageStructure
        bgProduct="bg-car"
        icon={<BsFillCarFrontFill />}
        title="Consórcio"
        info={info}
      />
      <Footer />
    </>
  );
}
