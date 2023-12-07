import { people01, people02, people03, quotes } from "../assets";

export const TestCard = () => {
  const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
    {
      id: "feedback-4",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
    {
      id: "feedback-5",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];
  return (
    <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 xl:grid-cols-3 mt-10">
      {feedback.map((feedback) => {
        return (
          <div key={feedback.id}  className="bg-black-gradient-hover transition duration-1000  rounded-xl px-[20px] py-[30px] lg:px-[40px] lg:py-[60px] flex flex-col">
            <img src={quotes} alt="quotes" className="w-[42px]"/>
            <p className="mt-[40px] mb-[24px]">{feedback.content}</p>
            <div className="flex gap-5 items-center justify-start">
              <img src={feedback.img} alt="image" className="w-[50px]" />
              <div>
                <h4>{feedback.name}</h4>
                <p className="text-dimWhite">{feedback.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
