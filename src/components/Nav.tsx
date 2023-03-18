import { ReactElement } from "react";
import { Dropdown } from "../styles/components/Dropdown";
import { LinkNav } from "../styles/components/LinkNav";
import { ToogleButton } from "../styles/components/ToogleButton";
import { Link } from "react-router-dom";

interface INav {
  background?: "lg:bg-transparent" | "lg:bg-primary-10";
}

export const Nav = ({
  background = "lg:bg-primary-10",
}: INav): ReactElement => {
  return (
    <nav
      className={`${background} bg-primary-10 relative flex w-full items-center justify-between   py-2 lg:flex-wrap`}
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-16">
        <Link className="text-xl text-white" to="/">
          <img
            src="assets/images/logoHp.svg"
            alt="Logo HP Capital"
            width={100}
          />
        </Link>
        <ToogleButton />
        <div
          className="!visible hidden basis-[100%] lg:basis-auto items-center lg:!flex"
          id="navbarSupportedContentX"
          data-te-collapse-item
        >
          <ul
            className="flex flex-col lg:flex-row gap-x-8"
            data-te-navbar-nav-ref
          >
            <LinkNav href="/" value="home" />
            <LinkNav href="/company" value="quem somos" />
            <Dropdown value="serviços" />
            <LinkNav href="/contact" value="contato" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
