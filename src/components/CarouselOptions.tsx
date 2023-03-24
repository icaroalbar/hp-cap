interface carrouselOptions {
  margin: number;
  slideBy: number;
  responsiveClass: boolean;
  nav: boolean;
  loop: boolean;
  autoplay: boolean;
  smartSpeed: number;
  mouseDrag: boolean;
  autoplayTimeout: number;
  autoplayHoverPause: boolean;
  touchDrag: boolean;
  responsive: any;
}

export const options: carrouselOptions = {
  margin: 60,
  slideBy: 4,
  responsiveClass: true,
  nav: false,
  loop: true,
  autoplay: true,
  smartSpeed: 300,
  mouseDrag: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  touchDrag: true,
  responsive: {
    1024: {
      items: 4,
    },

    768: {
      items: 3,
    },

    425: {
      items: 2,
    },

    320: {
      items: 1,
    },
  },
};
