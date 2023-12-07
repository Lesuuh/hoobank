import { bill, apple, google } from "../assets";
export const Billing = () => {
  return (
    <section className="max-w-[1400px] px-5 mt-[100px] md:mt-[190px] flex flex-col md:grid md:grid-cols-2 gap-5 lg:px-36">
      <div>
        <img src={bill} alt="bill" />
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
        <div className="flex flex-row flex-wrap  justify-start gap-5 md:justify-start gap-5 md:gap-20 items-center mt-5 md:mt-10">
            <img src={apple} alt="apple-store" className="object-contain " />
            <img src={google} alt="google-store" className="object-contain " />
        </div>
      </div>
    </section>
  );
};
