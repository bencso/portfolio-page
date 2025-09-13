import BallPool from "./BallPool";

const languages = [
  {
    img: "/images/languages/framer.png",
  },
  {
    img: "/images/languages/tailwindcss.png",
  },
  {
    img: "/images/languages/nextjs.png",
  },
  {
    img: "/images/languages/react.png",
  },
  {
    img: "/images/languages/js.png",
  },
];

export default function WorksWith() {
  return (
    <div className="workwith-block div_two">
      <BallPool languages={languages} />
      <h2>
        what i <br /> work with
      </h2>
    </div>
  );
}
