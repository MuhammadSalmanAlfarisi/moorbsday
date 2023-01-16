import { Footer, Navbar } from "../components";
import { About, Explore, Hero } from "../sections";
import { Cursor } from "../components/Cursor";

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Cursor />
    <div className="gradient-02 z-0" />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <div className="gradient-01 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-05 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
