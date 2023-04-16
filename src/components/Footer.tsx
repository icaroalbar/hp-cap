import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiMail, HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Footer = () => {
  const title = "text-md font-semibold border-b pb-2 border-slate-600";
  const ulBox = "flex flex-col gap-y-4";
  const ulInfo = "flex flex-col";
  const li = "text-md text-slate-400 my-1 inline-block";
  const linkFooter =
    "hover:text-slate-300 text-sm hover:underline underline-offset-2 duration-100";
  const info = "text-md text-slate-400";
  const icon = "text-3xl hover:text-slate-300 duration-100";
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-10 to-primary-20 pt-9 md:px-0 px-9">
      <div className="grid grid-cols-4 gap-6 text-white container max-w-5xl mx-auto">
        <div className="col-span-4 md:col-span-1">
          <ul className={ulBox}>
            <ul>
              <h1 className={title}>Onde estamos</h1>
              <a
                className={`${li} ${linkFooter} hover:text-slate-300`}
                href="https://www.google.com/maps/dir/-22.900081,-43.281157/Grupo+HP+-+Av.+Pref.+Silvio+Pican%C3%A7o,+463+-+Salas+708%2F711+-+Charitas,+Niter%C3%B3i+-+RJ,+24360-022/@-22.8965668,-43.3381442,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x998347beccf31d:0x5bdd73e4ac3ae53a!2m2!1d-43.0942589!2d-22.9238706"
                target="_blank"
              >
                <li>Av. Pref. Silvio Picanço, 463</li>
                <li>Sala 708/711</li>
                <li>Charitas - Niterói/RJ</li>
                <li>CEP: 24360-030</li>
              </a>
            </ul>
            <ul>
              <h1 className={title}>Siga nossas redes</h1>
              <div className="flex text-slate-400 gap-2 py-3">
                <a
                  href="https://www.facebook.com/grupohpcapital"
                  target="_blank"
                >
                  <li className={`${icon}`}>
                    <i>
                      <FaFacebook />
                    </i>
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/hpcapitaloficial/"
                  target="_blank"
                >
                  <li className={`${icon}`}>
                    <i>
                      <FaInstagram />
                    </i>
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/company/hpcapitaloficial/"
                  target="_blank"
                >
                  <li className={`${icon}`}>
                    <i>
                      <FaLinkedin />
                    </i>
                  </li>
                </a>
              </div>
            </ul>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <ul className={ulBox}>
            <ul className={ulInfo}>
              <h1 className={title}>HP Capital</h1>
              <Link target="_top" to="/">
                <li className={`${li} ${linkFooter}`}>Home</li>
              </Link>
              <Link target="_top" to="company">
                <li className={`${li} ${linkFooter}`}>Quem Somos</li>
              </Link>
            </ul>
            <ul className={ulInfo}>
              <h1 className={title}>Serviços</h1>
              <Link to="/safe">
                <li className={`${li} ${linkFooter}`}>Seguros</li>
              </Link>
              <Link target="_top" to="/structuring">
                <li className={`${li} ${linkFooter}`}>
                  Estruturação de Negócios
                </li>
              </Link>
              <Link target="_top" to="/health">
                <li className={`${li} ${linkFooter}`}>Plano de Saúde</li>
              </Link>
              <Link target="_top" to="/consortium">
                <li className={`${li} ${linkFooter}`}>Consórcio</li>
              </Link>
            </ul>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <ul className={ulBox}>
            <ul className={ulInfo}>
              <h1 className={title}>Outras informações</h1>
              <a href="https://www.agaempreendimentos.com.br/" target="_blank">
                <li className={`${li} ${linkFooter}`}>AGÁ Empreendimentos</li>
              </a>
              <a href="https://www.hpbank.com.br/" target="_blank">
                <li className={`${li} ${linkFooter}`}>HP Bank</li>
              </a>
              <Link target="_top" to="/policy">
                <li className={`${li} ${linkFooter}`}>
                  Politica de privacidade
                </li>
              </Link>
              <a href="https://dash-bankhp.vercel.app/" target="_blank">
                <li className={`${li} ${linkFooter}`}>Área do cliente</li>
              </a>
            </ul>
            <ul className={ulInfo}>
              <h1 className={title}>Área do parceiro</h1>
              <a href="https://glpi.hpcap.com.br/" target="_blank">
                <li className={`${li} ${linkFooter}`}>GLPI</li>
              </a>
              <a href="https://login.microsoftonline.com/" target="_blank">
                <li className={`${li} ${linkFooter}`}>Webmail</li>
              </a>
              <a href="#" target="_blank">
                <li className={`${li} ${linkFooter}`}>Operador</li>
              </a>
            </ul>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <ul className={ulBox}>
            <ul className="flex flex-col gap-y-2">
              <h1 className={title}>Central de Relacionamento</h1>
              <li className={`${info} ${linkFooter}`}>
                <a
                  href="tel:+552140404148"
                  className="flex gap-x-3 items-center"
                >
                  <FaPhoneAlt />
                  (21) 4040-4148
                </a>
              </li>
              <li className={`${info} flex gap-x-2`}>
                <HiOutlineClock className="lg:text-3xl" />
                Segunda a sexta, 08h às 18h exceto feriado.
              </li>
              <li className={`${info} ${linkFooter}`}>
                <Link
                  target="_top"
                  to="/contact"
                  className="flex gap-x-3 items-center"
                >
                  <HiMail className="text-lg" />
                  contato@hpcap.com.br
                </Link>
              </li>
            </ul>
            <ul className={ulInfo}>
              <h1 className={title}>Precisa de ajuda?</h1>
              <Link target="_top" to="/contact">
                <li className={`${li} ${linkFooter}`}>Atendimento</li>
              </Link>
              <Link target="_top" to="/contact">
                <li className={`${li} ${linkFooter}`}>Ouvidoria</li>
              </Link>
              <Link target="_top" to="/contact">
                <li className={`${li} ${linkFooter}`}>Contato</li>
              </Link>
            </ul>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs pt-9 pb-5 text-slate-400">
        <span> &copy; HP Capital {ano} - Todos os direitos reservados</span>
      </div>
    </footer>
  );
};
