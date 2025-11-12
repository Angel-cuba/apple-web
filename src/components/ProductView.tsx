import clsx from "clsx";
import { useMacStore } from "../store";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
export function ProductView() {
  const { color, scale, setColor, setScale } = useMacStore();
  return (
    <section id="product-viewer">
      <h2>Take a look.</h2>
      <div className="controls">
        <p className="info">
          MacbookPro {scale} in {color}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && "active"
              )}
              onClick={() => setColor("#abd5bd")}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
              onClick={() => setColor("#2e2c2e")}
            />
          </div>
          <div className="size-control">
            <div
              className={clsx(
                "bg-neutral-300",
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.06)}
            />
            <div
              className={clsx(
                "bg-neutral-300",
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
              onClick={() => setScale(0.08)}
            />
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 3, 5], fov: 50, near: 0.1, far: 1000 }}
      >
        <Box position={[-1, 1, -1]} scale={10 * scale} material-color={color} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
