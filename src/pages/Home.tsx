import Header from "../components/Header";
import Partners from "../components/Partners";
import { Footer } from "../components/Footer";
import Policy from "../components/PolicyModal";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

export default function Home() {
  return (
    <>
      <Policy />
      <Header />
      <SectionOne />
      <SectionTwo />
      <Partners />
      <Footer />
    </>
  );
}
