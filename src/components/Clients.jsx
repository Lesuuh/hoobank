import { airbnb, binance, coinbase, dropbox } from "../assets";

export const Clients = () => {
  const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-36 flex flex-row flex-wrap w-full gap-5 items-center justify-evenly mt-[50px] md:mt-[100px]">
      {clients.map((client) => {
        return (
          <div key={client.logo} className="min-w-[120px]">
            <img src={client.logo} alt={client.logo}  className="w-[100px] md:w-[192px]"/>
          </div>
        );
      })}
    </section>
  );
};
