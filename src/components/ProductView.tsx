import clsx from "clsx";
import { useMacStore } from "../store";

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
      <p className="text-white text-4xl">Render Canvas</p>
    </section>
  );
}
