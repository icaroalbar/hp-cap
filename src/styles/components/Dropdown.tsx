import { downArrowIcon } from "../../utils/Icons";
import { linkNavStyle } from "./LinkNav";
import { ReactElement } from "react";
import { ILink } from "./@types";
import { LinkDropdown } from "./LinkDropdown";
import {
  BsShieldShaded,
  BsFillGearFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { BiHealth } from "react-icons/bi";

export const Dropdown = ({ value }: ILink): ReactElement => {
  const linkMegaNavStyle: string = `${linkNavStyle} flex items-center whitespace-nowrap`;

  return (
    <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
      <a
        className={linkMegaNavStyle}
        href="#"
        data-te-ripple-init
        data-te-ripple-color="light"
        type="button"
        id="dropdownMenuButtonX"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-nav-link-ref
      >
        {value}
        <span className="ml-2 w-2">{downArrowIcon}</span>
      </a>
      <div
        className="absolute shadow-xl rounded-md left-0 right-0 lg:left-auto lg:right-8 z-[1000] mt-0 hidden bg-white [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButtonX"
        data-te-dropdown-menu-ref
      >
        <div className="py-5 lg:px-2">
          <LinkDropdown
            value="Seguros"
            href="/safe"
            icon={<BsShieldShaded />}
          />
          <LinkDropdown
            value="Estruturação de negócios"
            href="/structuring"
            icon={<BsFillGearFill />}
          />
          <LinkDropdown
            value="Planos de saúde"
            href="/health"
            icon={<BiHealth />}
          />
          <LinkDropdown
            value="Consórcio"
            href="/consortium"
            icon={<BsFillCarFrontFill />}
          />
        </div>
      </div>
    </li>
  );
};
