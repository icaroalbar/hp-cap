import { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class Carousel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <OwlCarousel items={3} loop smartSpeed={200} margin={8}>
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
          <div className="item">9</div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
