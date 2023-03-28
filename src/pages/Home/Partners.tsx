import { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../../styles/components/CarouselOptions";

export class Carousel extends Component {
  render() {
    return (
      <div className="p-12">
        <div className="text-primary-20 mx-12 mt-12">
          <h2 className="font-light text-3xl pb-3 border-b-2 border-primary-20">
            Parceiros
          </h2>
          <p className="mt-5 text-justify text-xl">
            Nossa empresa trabalha com as melhores instituições do mercado como
            parcerias com toda segurança e qualidade para os nossos clientes e
            trazendo mais conforto e tranquilidade.
          </p>
        </div>
        <OwlCarousel {...options}>
          <img
            className="item"
            src="/assets/images/bradesco.png"
            alt="Logo Bradesco Seguros"
          />
          <img
            className="item"
            src="/assets/images/cashme.png"
            alt="Logo Cashme"
          />
          <img
            className="item"
            src="/assets/images/creditas.png"
            alt="Logo Creditas"
          />
          <img
            className="item"
            src="/assets/images/icatu.png"
            alt="Logo Icatu"
          />
          <img
            className="item"
            src="/assets/images/metlife.png"
            alt="Logo Metlife"
          />
          <img
            className="item"
            src="/assets/images/omint.png"
            alt="Logo Omint"
          />
          <img
            className="item"
            src="/assets/images/porto.png"
            alt="Logo Porto Seguro"
          />
          <img
            className="item"
            src="/assets/images/sulamerica.png"
            alt="Logo Sulamerica"
          />
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
