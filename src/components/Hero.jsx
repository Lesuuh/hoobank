import { discount, robot } from "../assets";
import { Getstarted } from "./Getstarted";

export const Hero = ({home}) => {
  return (
    <div id={home} className="flex flex-col max-w-[1400px] mx-auto md:grid md:grid-cols-2 w-full items-center px-5 py-10 lg:px-36">
      <div className="left">
        <div className=" max-w-[408px] rounded-xl bg-discount-gradient flex flex-row items-center p-1">
          <img src={discount} alt="" />
          <p className="sm:text-sm">
            20% <span className="text-dimWhite">DISCOUNT FOR</span> 1 MONTH{" "}
            <span className="text-dimWhite">ACCOUNT</span>
          </p>
        </div>
        <div className="flex flex-row items-center mt-10">
          <div className="flex-1 text-5xl  text-white md:text-6xl  font-semibold  md:leading-[75px]">
            The Next <span className="text-gradient">Generation</span>
          </div>
          <div className="hidden lg:block">
            <Getstarted />
          </div>
        </div>
        <div className="flex-1 text-5xl text-white md:text-6xl font-semibold  md:leading-[75px]">
          Payment Method.
        </div>
        <p className="text-dimWhite max-w-[500px] mt-5 ">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="right pt-5 flex flex-1 items-center md:my-0 my-10 justify-center relative">
        <img
          src={robot}
          alt=""
          className="w-ful h-full relative z-[5] ml-10 lg:ml-32 object-contain"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className=" lg:hidden">
            <Getstarted />
          </div>
    </div>
  );
};
