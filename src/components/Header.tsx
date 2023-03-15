import { WhatsAppButton } from "../styles/components/WhatsAppButton";
import { Button } from "../styles/components/Button";
import { ReactElement } from "react";
import { Nav } from "./Nav";

function Header(): ReactElement {
  return (
    <header className="lg:h-[100vh] bg-cover bg-header">
      <div className="bg-[#0f1a2e80]  top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden">
        <Nav background="lg:bg-transparent" />
        <div className="flex h-full p-16 lg:m-0">
          <div className="text-white text-center lg:text-left lg:w-2/4">
            <h1 className="mb-6 text-5xl font-bold">HP Capital</h1>
            <h3 className="mb-8 text-4xl font-light">
              Soluções eficientes que mudam a vida das pessoas.
            </h3>
            <p className="text-lg">
              Somos a HP Capital, parceira das maiores seguradoras do Brasil,
              abrangendo grandes segmentos de serviços.
            </p>
            <p className="text-lg mt-5">
              Trazendo para você um grande conforto para a sua vida!.
            </p>
            <Button value="saiba mais" />
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </header>
  );
}

export default Header;
