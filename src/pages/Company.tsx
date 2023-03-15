import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export default function Company() {
  return (
    <>
      <Helmet>
        <title>Quem Somos</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <h1>company</h1>
      <Footer />
    </>
  );
}
