import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { BsFillGearFill } from "react-icons/bs";
import { ProductPageStructure } from "../../components/ProductPageStructure";
import { Head } from "../../utils/Head";

const info: string = `Um empreendimento forte e competitivo precisa de uma base sólida e bem estruturada. Por esse motivo, oferecemos todo suporte para a construção do seu negócio.`;

export default function Structuring() {
  return (
    <>
      <Head title="Estruturação" />
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
