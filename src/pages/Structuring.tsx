import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Button } from "../styles/components/Button";
import { Helmet } from "react-helmet";
import { BsFillGearFill } from "react-icons/bs";

const bgProduct = `bg-structuring`;

const icon = <BsFillGearFill />;

const title = `Estruturação de negócios`;

const info = `Um empreendimento forte e competitivo precisa de uma base sólida e bem estruturada. Por esse motivo, oferecemos todo suporte para a construção do seu negócio.`;

export default function Structuring() {
  return (
    <>
      <Helmet>
        <title>Estruturação</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <div>
        <div
          className={`${bgProduct} bg-cover bg-right lg:h-[80vh] flex items-center`}
        >
          <div className="grid grid-cols-2 gap-4 px-8 md:px-24 py-12">
            <div className="col-span-2 md:col-span-1 text-justify bg-zinc-50 p-10 rounded-lg shadow-lg">
              <h1 className="flex items-center gap-x-4 text-2xl pb-2 border-b-2 border-primary-10 mb-5 text-justify">
                {icon} {title}
              </h1>
              <p>{info}</p>
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
      </div>
      <Footer />
    </>
  );
}
