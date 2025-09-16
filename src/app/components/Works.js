import { useEffect, useState, useRef } from "react";
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
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  //TODO: megcsinálni hogy a width a progressbaron legyen majd a progressnek megfelelő stb.
  const progressBar = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);

    if (progress === 100) {
      clearInterval(intervalRef.current);
      if (selectedWork + 1 == works.length) setSelectedWork(0);
      else setSelectedWork((prev) => prev + 1);
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  useEffect(() => {
    setProgress(0);

    return () => clearInterval(intervalRef.current);
  }, [selectedWork]);

  return (
    <div className="works">
      <div className="works-pills">
        {works.flatMap((work, idx) => {
          return (
            <div
              onClick={() => setSelectedWork(works.indexOf(work))}
              key={idx}
              className="works-pills_pill"
              style={{ "--percent": `${progress}%` }}
              data-active={selectedWork === works.indexOf(work)}
            >
              <p>{work.name}</p>
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
