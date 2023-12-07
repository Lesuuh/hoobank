import { Button } from "./Button";

export const CTA = () => {
  return (
    <section id="getstarted" className="max-w-[1400px] mx-auto px-5 lg:px-36 mt-[50px] lg:mt-[100px]">
      <div className="bg-black-gradient rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between px-[50px] lg:px-[100px] py-[35px] lg:py-[70px]">
        <div className="max-w-[600px]">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Let’s try our service now!
          </h2>
          <p className="text-dimWhite mt-5">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button
          text="Get Started"
          className="mt-5 lg:mt-10 bg-blue-gradient max-w-[250px] cursor-pointer hover-brightness px-[20px] py-[10px] lg:px-[33px] lg:py-[19px] rounded-xl font-semibold text-primary"
        />
      </div>
    </section>
  );
};
