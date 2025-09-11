import React, { useEffect, useRef, useState} from "react";
import Matter from "matter-js";

// Ez a kódrészlet a matter js examples-éből van.
// Link hozzá: https://github.com/liabru/matter-js/blob/master/examples/ballPool.js
const BallPool = ({ languages }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    // Setup Matter.js
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engine.positionIterations = 12;
    engine.velocityIterations = 8;
    engineRef.current = engine;
    const world = engine.world;
    const width = sceneRef.current ? sceneRef.current.offsetWidth : 800;
    const height = sceneRef.current ? sceneRef.current.offsetHeight : 600;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        showAngleIndicator: false,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const ballRadius = 140;
    const wallThick = ballRadius * 2;

    Composite.add(world, [
      Bodies.rectangle(400, 739, 1800, wallThick, {
        isStatic: true,
        render: { fillStyle: "transparent" },
      }),
    ]);

    // Jobb fal
    Composite.add(world, [
      Bodies.rectangle(width * 2 + 294, height, wallThick, height * 4, {
        isStatic: true,
        render: { fillStyle: "black" },
      }),
    ]);

    // Bal fal
    Composite.add(world, [
      Bodies.rectangle(-578, height, wallThick, height * 4, {
        isStatic: true,
        render: { fillStyle: "black" },
      }),
    ]);

    // Felső fal
    Composite.add(world, [
      Bodies.rectangle(width, -140, width * 4, wallThick, {
        isStatic: true,
        render: { fillStyle: "black" },
      }),
    ]);

    Composite.add(
      world,
      languages.map((lang) =>
        Bodies.rectangle(
          Math.floor(Math.random() * 1000) + -200,
          600,
          ballRadius + 92,
          ballRadius + 92,
          {
            render: {
              sprite: {
                texture: lang.img,
              },
            },
            chamfer: {
              radius: [40, 40, 40, 40],
            },
          }
        )
      )
    );

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
      render.textures = {};
    };
  }, [languages]);

  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      className={`w-full h-full z-10 ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
      ref={sceneRef}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    />
  );
};

export default BallPool;
