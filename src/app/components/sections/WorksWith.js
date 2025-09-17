import BallPool from "../BallPool";

//TODO Megcsinálni azt hogy reszponziv képek :) , szóval legyen majd telefonra tabletre és gépre jó kép is, különböző nagyságban :)
const languages = [
  {
    img: "/images/languages/framer.png",
  },
  {
    img: "/images/languages/laravel.png",
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
