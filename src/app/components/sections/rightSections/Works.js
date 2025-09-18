import { useEffect, useState, useRef } from "react";
import WorkDiv from "../../works/WorkDiv";

//TODO: Képeket majd kicsinyiteni SEO / teljesitmény miatt :)
const works = [
  {
    name: "Web development",
    description:
      "We craft unique, conversion-driven websites that help startups grow faster.",
    img: "/images/works/test.jpeg",
    cta: "I want this!",
  },
  {
    name: "UI/UX Design",
    description:
      "We craft unique, conversion-driven websites that help startups grow faster.",
    img: "/images/works/test.jpeg",
    cta: "Who are you?",
  },
];

export default function Works({ setSection }) {
  const [selectedWork, setSelectedWork] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 80);

    if (progress === 100) {
      if (selectedWork + 1 == works.length) setSelectedWork(0);
      else setSelectedWork((prev) => prev + 1);
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  function clickPill(index) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setSelectedWork(index);
  }

  useEffect(() => {
    setProgress(0);
  }, [selectedWork]);

  return (
    <div className="works">
      <div className="works-pills">
        {works.map((work, idx) => (
          <div
            onClick={() => clickPill(idx)}
            key={idx}
            className={`works-pills_pill${
              selectedWork === idx ? " active" : ""
            }`}
          >
            <p>{work.name}</p>
            {selectedWork === idx && (
              <div className="progress-bar">
                <div
                  className="progress-bar__fill"
                  style={{
                    width: `${progress}%`,
                    transition: progress === 0 ? "none" : "width 0.1s linear",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedWork >= 0 && selectedWork < works.length && (
        <WorkDiv
          name={works[selectedWork].name}
          img={works[selectedWork].img}
          cta={works[selectedWork].cta}
          description={works[selectedWork].description}
          setSection={setSection}
        />
      )}
    </div>
  );
}
