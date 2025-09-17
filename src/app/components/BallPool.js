import React, { useEffect, useRef, useState } from "react";
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

    const ballRadius = 80;
    const wallThick = ballRadius * 2;

    Composite.add(world, [
      Bodies.rectangle(width / 2, height + wallThick / 2, width, wallThick, {
        isStatic: true,
        render: { fillStyle: "red" },
      }),
    ]);

    const balls = languages.map((lang) =>
      Bodies.rectangle(
        Math.floor(Math.random() * width -100) + width * 100,
        Math.random() * 100 + 50,
        ballRadius,
        ballRadius,
        {
          render: {
            sprite: {
              texture: lang.img
            }
          },
          chamfer: {
            radius: 20
          }
        }
      )
    );
    Composite.add(world, balls);

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
      max: { x: width, y: height },
    });

    Matter.Events.on(engine, "beforeUpdate", () => {
      balls.forEach((ball) => {
        if (ball.position.y > height + ballRadius) {
          Matter.Body.setPosition(ball, {
            x: Math.floor(Math.random() * width * 0.8) + width * 0.1,
            y: Math.random() * 100 + 50,
          });
          Matter.Body.setVelocity(ball, { x: 0, y: 0 });
        }
      });
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
      className={`w-full h-full z-10 ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      ref={sceneRef}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    />
  );
};

export default BallPool;
