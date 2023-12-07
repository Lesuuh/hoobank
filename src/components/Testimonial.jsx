import { TestCard } from "./TestCard";

export const Testimonial = () => {
  return (
    <section id="testimonial" className="max-w-[1400px] mx-auto px-5 lg:px-36 lg:grid mt-[100px] lg:[150px] relative">
      <div className="header flex flex-col gap-5 items-center lg:grid lg:grid-cols-2">
        <h2 className="text-4xl lg:text-5xl">What people are saying about us</h2>
        <p className="text-dimWhite">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      
        <TestCard/>
        <div className="absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 bottom-0 rounded-full pink__gradient" />
      
    </section>
  );
};
