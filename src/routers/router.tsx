import { BrowserRouter, Route, Routes } from "react-router-dom";
import Structuring from "../pages/Structuring";
import Consortium from "../pages/Consortium";
import Contact from "../pages/Contact";
import Company from "../pages/Company";
import Health from "../pages/Health";
import Policy from "../pages/Policy";
import Home from "../pages/Home";
import Safe from "../pages/Safe";
import { Footer } from "../components/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/structuring" element={<Structuring />} />
        <Route path="/health" element={<Health />} />
        <Route path="/consortium" element={<Consortium />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
