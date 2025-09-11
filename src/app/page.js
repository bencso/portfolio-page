"use client";

import LetsCollabBlock from "./components/LetsCollab";
import ItsMeBlock from "./components/ItsMeBlock";
import Slider from "./components/Slider";
import Works from "./components/Works";
import WorksWith from "./components/WorksWith";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="parent">
        <div className="child1">
          <ItsMeBlock />
          <WorksWith />
          <LetsCollabBlock />
        </div>
        <div className="child2">
          <Works />
          <Slider />
        </div>
      </div>
    </>
  );
}
