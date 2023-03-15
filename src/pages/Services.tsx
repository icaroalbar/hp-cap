import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Serviços</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <h1>Services</h1>
      <Footer />
    </>
  );
}
