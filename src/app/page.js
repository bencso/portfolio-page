"use client";

import LetsCollabBlock from "./components/LetsCollab";
import ItsMeBlock from "./components/ItsMeBlock";
import Slider from "./components/Slider";
import Works from "./components/Works";
import WorksWith from "./components/WorksWith";
import Navbar from "./components/NavBar";
import { useState } from "react";
import PlayGround from "./components/PlayGround";

export default function Home() {
  const [section, setSection] = useState("works");
  return (
    <>
      <Navbar  setTab={setSection} tab={section}/>
      <div className="parent">
        <div className="child1">
          <ItsMeBlock />
          <WorksWith />
          <LetsCollabBlock />
        </div>
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
        </div>
      </div>
    </>
  );
}
