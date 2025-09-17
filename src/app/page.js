"use client";

import LetsCollabBlock from "./components/sections/LetsCollab";
import ItsMeBlock from "./components/sections/ItsMeBlock";
import Slider from "./components/Slider";
import Works from "./components/sections/rightSections/Works";
import WorksWith from "./components/sections/WorksWith";
import Navbar from "./components/navbar/NavBar";
import { useEffect, useMemo, useState } from "react";
import PlayGround from "./components/sections/rightSections/PlayGround";
import Contact from "./components/sections/rightSections/Contact";
import WebDevelopment from "./components/sections/rightSections/works/Webdevelopment";
import UiDesign from "./components/sections/rightSections/works/UiUxDesign";
import About from "./components/sections/rightSections/AboutMe";

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

  function RightLayout() {
   return useMemo(()=>{
     return (
      <div className="child2">
        {section === "info" && (
          <>
            <Works setSection={setSection} />
            <Slider />
          </>
        )}
        {section === "works" && <PlayGround />}
        {section === "about" && <About />}
        {section === "contact" && <Contact />}
        {section === "web development" && <WebDevelopment />}
        {section === "ui/ux design" && <UiDesign />}
      </div>
    );
   },[]);
  }

  return (
    <>
      <Navbar setTab={setSection} tab={section} />
      <div className="parent">
        <div className="child1">
          <ItsMeBlock tab={section} setTab={setSection} />
          <WorksWith />
          <LetsCollabBlock tab={section} setTab={setSection} />
        </div>
        <RightLayout />
      </div>
    </>
  );
}
