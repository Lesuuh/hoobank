import { bill, apple, google } from "../assets";
export const Billing = () => {
  return (
    <section id="billing" className="max-w-[1400px] mx-auto px-5 mt-[100px] md:mt-[190px] flex flex-col md:grid md:grid-cols-2 gap-5 lg:px-36">
      <div className="relative">
        <img src={bill} alt="bill" className="relative z-10"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
        Easily control your billing & invoicing.
        </h2>
        <p className="text-dimWhite mt-5 md:mt-10">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap  justify-start gap-5 md:justify-start md:gap-20 items-center mt-5 md:mt-10">
            <img src={apple} alt="apple-store" className="object-contain " />
            <img src={google} alt="google-store" className="object-contain " />
            
        </div>
      </div>
    </section>
  );
};
