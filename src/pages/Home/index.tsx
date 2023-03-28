import Header from "./Header";
import Partners from "./Partners";
import { Footer } from "../../components/Footer";
import Policy from "../../components/PolicyModal";
import { Information } from "./Information";
import { Solutions } from "./Solutions";

export default function Home() {
  return (
    <>
      <Policy />
      <Header />
      <Information />
      <Solutions />
      <Partners />
      <Footer />
    </>
  );
}
