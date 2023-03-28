import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { About } from "./About";
import { Founders } from "./Founders";
import { Pillars } from "./Pillars";
import { Companies } from "./Companies";
import { Head } from "../../utils/Head";
import { HpGroup } from "./HpGroup";

export default function Company() {
  return (
    <>
      <Head title="Quem somos" />
      <Nav />
      <main className="flex flex-col gap-10 bg-company bg-cover">
        <About />
        <div className="p-16 flex flex-col gap-10">
          <Pillars />
          <HpGroup />
          <Founders />
          <Companies />
        </div>
      </main>
      <Footer />
    </>
  );
}
