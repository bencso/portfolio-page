"use client";

import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  // const [percent, setPercent] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if(percent<100){
  //       setPercent(prev => prev + 1);
  //     }
  //   }, 16);
  //   return () => clearInterval(interval);
  // }, [percent]);
  return (
    <div>
      <h1>Kecske</h1>
      <h2>Nagyon jó</h2>
      <h3>Meg ja!</h3>
      <p>LOREM ipsum!</p>
      <div className="flex gap-4">
        {/* Ikonos gomb */}
        <button className="button button-icon">
          Who are you?
          <div className="button_icon">
            <AiOutlineRight />
          </div>
        </button>
        {/* Sima gomb */}
        <button className="button">Im sending you a message</button>
      </div>

      <div className="pills">
        <div className="pill" style={{ "--percent": `${0}%` }}>
          {0}%
        </div>
        <div className="pill" style={{ "--percent": "50%" }}>
          50%
        </div>
        <div className="pill" style={{ "--percent": "70%" }}>
          70%
        </div>
      </div>
    </div>
  );
}
