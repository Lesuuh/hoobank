import { Button } from "./Button"
import { card } from "../assets"

export const Carddeal = () => {
  return (
    <section className="max-w-[1400px] px-5 mt-[100px] md:mt-[190px] flex flex-col md:grid md:grid-cols-2 gap-5 lg:px-36">
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
    <div className="">
      <img src={card} alt="card" />
    </div>
  </section>
  )
}
