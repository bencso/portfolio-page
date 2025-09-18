import { Fragment } from "react";

const works = [
  {
    name: "NagyBicska",
    workName: "nagy_bicska",
    img: "2.webp",
  },
  {
    name: "KisBicskaNemNagyBicska",
    workName: "kis_bicska",
    img: "1.webp",
  },
  {
    name: "KisBicskaNemNagyBicska",
    workName: "kis_bicska",
    img: "1.webp",
  },
  {
    name: "KisBicskaNemNagyBicska",
    workName: "kis_bicska",
    img: "1.webp",
  },
];

export default function PlayGround() {
  return (
    <div className="playground-block">
      <div className="playground-block-row">
        <div className="playground-block-column">
          {works.slice(0, works.length / 2).map((work, idx) => {
            return (
              <Fragment key={idx}>
                <a href={`/work/${work.workName}`} title={work.name}>
                  <figure>
                    {/*
                    eslint-disable-next-line @next/next/no-img-element
                 */}
                    <img src={`/images/projects/${work.img}`} alt={work.name} />
                  </figure>
                </a>
              </Fragment>
            );
          })}
        </div>
        <div className="playground-block-column">
          {works.slice(works.length / 2).map((work, idx) => {
            return (
              <Fragment key={idx}>
                <a href={`/work/${work.workName}`} title={work.name}>
                  <figure>
                    {/*
                    eslint-disable-next-line @next/next/no-img-element
                 */}
                    <img src={`/images/projects/${work.img}`} alt={work.name} />
                  </figure>
                </a>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
