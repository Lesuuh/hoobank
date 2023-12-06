import { TestCard } from "./TestCard";

export const Testimonial = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-36 md:grid mt-[100px] md:[150px]">
      <div className="header flex flex-col md:grid md:grid-cols-2">
        <h2 className="text-4xl md:text-5xl">What people are saying about us</h2>
        <p className="text-dimWhite">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      
        <TestCard/>
      
    </section>
  );
};
