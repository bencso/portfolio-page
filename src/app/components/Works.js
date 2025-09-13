import { useState } from "react";
import IconButton from "./buttons/IconButton";
import WorkDiv from "./works/WorkDiv";

const works = [
  {
    name: "Web development",
    description:
      "We craft unique, conversion-driven websites that help startups grow faster.",
    img: "/images/works/test.jpg",
    cta: "Who are you?",
  },
  {
    name: "UI/UX Design",
    description:
      "We craft unique, conversion-driven websites that help startups grow faster.",
    img: "/images/works/test.jpg",
    cta: "Who are you?",
  },
];

export default function Works() {
  const [selectedWork, setSelectedWork] = useState(0);

  

  return (
    <div className="works">
      <div className="works-pills">
        {works.flatMap((work, idx) => {
          return (
            <div
              onClick={() => setSelectedWork(works.indexOf(work))}
              key={idx}
              className="works-pills_pill"
              style={{ "--percent": `${50}%` }}
            >
              {work.name}
            </div>
          );
        })}
      </div>

      {selectedWork >= 0 && works.length >= selectedWork && (
        <WorkDiv
          name={works[selectedWork].name}
          img={works[selectedWork].img}
          cta={works[selectedWork].cta}
          description={works[selectedWork].description}
        />
      )}
    </div>
  );
}
