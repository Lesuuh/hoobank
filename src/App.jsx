import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Billing } from "./components/Billing";
import { Carddeal } from "./components/Carddeal";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <>
      <div className="bg-primary w-full h-full text-white  poppins">
        <Navbar />
        <Hero />
        <Stats/>
        <Features/>
        <Billing/>
        <Carddeal/>
        <Testimonial/>
        
      </div>
    </>
  );
}

export default App;
