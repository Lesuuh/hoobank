import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Billing } from "./components/Billing";
import { Carddeal } from "./components/Carddeal";
import { Testimonial } from "./components/Testimonial";
import { Clients } from "./components/Clients";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

import { BrowserRouter } from "react-router-dom";

function App() {
  // function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    console.log(section)
  };

  return (
    <>
      <div className="bg-primary w-full h-full text-white  poppins">
        <BrowserRouter>
          <Navbar scrollToSection={scrollToSection} />
          <Hero />
          <Stats />
          <Features />
          <Billing />
          <Carddeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
