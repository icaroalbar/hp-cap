import ScrollToTop from "react-scroll-up";
import { upIcon } from "../../utils/Icons";

export const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={200} duration={700}>
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block p-3 bg-primary-20 border-white border text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-10 hover:shadow-lg focus:bg-primary-10 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-20 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5"
        id="btn-back-to-top"
      >
        {upIcon}
      </button>
    </ScrollToTop>
  );
};
