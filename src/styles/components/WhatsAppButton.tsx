import { ReactElement } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = (): ReactElement => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=552140404148&text=Ol%C3%A1%2C%20Grupo%20HP!%20Poderia%20me%20ajudar%3F"
      target="_blank"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="fixed inline-block p-3 bg-primary-20 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-10 hover:shadow-lg focus:bg-primary-10 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-20 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
      id="btn-back-to-top"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};
