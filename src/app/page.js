"use client";

import LetsCollabBlock from "./components/LetsCollab";
import ItsMeBlock from "./components/ItsMeBlock";
import Slider from "./components/Slider";
import Works from "./components/Works";
import WorksWith from "./components/WorksWith";
import Navbar from "./components/NavBar";
import { useEffect, useState } from "react";
import PlayGround from "./components/PlayGround";

export default function Home() {
  const [section, setSection] = useState(null);

  useEffect(() => {
    const savedSection = localStorage.getItem("section");
    if (savedSection) {
      setSection(savedSection);
    } else {
      localStorage.setItem("section", "info");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  function RightLayout(){
  return (
    <div className="child2">
          {section === "info" && (
            <>
              <Works />
              <Slider />
            </>
          )}
          {section === "works" && (
            <>
              <PlayGround />
            </>
          )}
          {section === "about" && (
            <>
              <div>ABOUT</div>
            </>
          )}
          {section === "contact" && (
            <>
              <div>Contact</div>
            </>
          )}
        </div>
  )
}

  return (
    <>
      <Navbar setTab={setSection} tab={section} />
      <div className="parent">
        <div className="child1">
          <ItsMeBlock tab={section} setTab={setSection}/>
          <WorksWith />
          <LetsCollabBlock tab={section} setTab={setSection}/>
        </div>
        <RightLayout/>
      </div>
    </>
  );
}
