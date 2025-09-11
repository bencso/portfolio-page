import { Fragment, useReducer, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bencso",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    link: "https://www.github.com/bencso",
    icon: <FaGithub />,
  },
  //   {
  //     name: "LinkedIn",
  //     link: "https://www.linkedin.com/in/bencso",
  //     icon: <FaLinkedin />,
  //   },
];

export default function Navbar({tab, setTab}) {
  return (
    <nav className="nav">
      <div className="tabs">
        <button
          className={`tabs-tab ${tab == "info" ? "active" : ""}`}
          onClick={() => setTab("info")}
        >
          Info
        </button>
        <button
          className={`tabs-tab ${tab == "works" ? "active" : ""}`}
          onClick={() => setTab("works")}
        >
          Works
        </button>
      </div>

      <div className="socials">
        {socials.map((social, idx) => {
          return (
            <Fragment key={idx}>
              <a
                className="socials-social"
                title={social.name}
                href={social.link}
                target="_blank"
              >
                {social.icon}
              </a>
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
}
