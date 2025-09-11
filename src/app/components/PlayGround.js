import { Fragment } from "react";

const works = [
//   {
//     name: "KisBicskaNemNagyBicska",
//     workName: "kis_bicska",
//     img: "elso.png",
//   },
//   {
//     name: "NagyBicska",
//     workName: "nagy_bicska",
//     img: "oneclick.png",
//   },
//   {
//     name: "NagyBicska",
//     workName: "nagy_bicska",
//     img: "softform.png",
//   },
//   {
//     name: "NagyBicska",
//     workName: "nagy_bicska",
//     img: "telefon.png",
//   },
];

export default function PlayGround() {
  return (
    <div className="playground-block">
      <div className="playground-block-grid">
        {works.map((work, idx) => {
          return (
            <Fragment key={idx}>
              <a
                className="playground-block-grid-block"
                href={`/work/${work.workName}`}
                title={work.name}
              >
                <figure>
                 {/*
                    eslint-disable-next-line @next/next/no-img-element
                 */}
                  <img src={`/images/works/${work.img}`} alt={work.name} />
                </figure>
              </a>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
