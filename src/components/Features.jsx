import { star, shield, send } from "../assets";
import { Button } from "./Button";

export const Features = () => {
  const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
      changeBg: true,
    },
    {
      id: "feature-3",
      icon: send,
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];
  return (
    <section id="features" className="max-w-[1400px] mx-auto px-5 mt-[100px] md:mt-[190px] flex flex-col md:grid md:grid-cols-2 gap-5 lg:px-36">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-dimWhite mt-5 md:mt-10">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button
          text="Get Started"
          className="mt-5 md:mt-10 bg-blue-gradient px-4 py-2 rounded-xl font-semibold text-primary"
        />
      </div>
      <div className="flex flex-col gap-5">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className={`${
                feature.changeBg === true ? "bg-black-gradient box-shadow rounded-xl p-2" : ""
              } flex flex-row items-start gap-5`}
            >
              <img src={feature.icon} alt="icon" />
              <div className="flex-col flex ">
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-dimWhite mt-2">{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
