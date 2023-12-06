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
  ];
  return (
    <div className="flex flex-col gap-10 md:grid md:grid-cols-3">
      {feedback.map((feedback) => {
        return (
          <div key={feedback.id}  className="bg-black-gradient rounded-xl px-5 py-5">
            <img src={quotes} alt="quotes" />
            <p>{feedback.content}</p>
            <div className="grid grid-cols-2 items-center">
              <img src={feedback.img} alt="image" />
              <div>
                <h4>{feedback.name}</h4>
                <p>{feedback.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
