/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

const data = [
  {
    name: "Jakab",
    src: "/images/logos/logo1.png",
    link: "https://google.com",
  },
  {
    name: "Tibor",
    src: "/images/logos/logo2.png",
    link: "https://google.com",
  },
  {
    name: "János",
    src: "/images/logos/logo3.png",
    link: "https://google.com",
  },
  {
    name: "János 2",
    src: "/images/logos/logo4.png",
    link: "https://google.com",
  },
];

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-container">
        {[...data].concat(data).map((item, idx) => {
          return (
            <Fragment key={idx}>
              <a className="slider-item" target="_blank" title={item.name} href={item.link}>
                <img
                  src={item.src}
                  alt={item.name}
                  draggable={false}
                />
              </a>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
