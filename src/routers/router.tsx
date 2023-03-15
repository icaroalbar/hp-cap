import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Company from "../pages/Company";
import Policy from "../pages/Policy";
import Home from "../pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
}
