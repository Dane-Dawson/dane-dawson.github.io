import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const MysticBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#d4af37" }, // Gold particles
          move: {
            enable: true,
            speed: 0.6, // Slow, drifting movement
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Varying transparency
            animation: { enable: true, speed: 1, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default MysticBackground;