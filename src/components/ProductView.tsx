import clsx from "clsx";
import { useMacStore } from "../store";

const finishes = [
  { name: "Silver", color: "#c8c8c8", className: "bg-neutral-300" },
  { name: "Space Black", color: "#2e2c2e", className: "bg-neutral-900" },
];

const sizes = [
  { label: "14", scale: 0.058 },
  { label: "16", scale: 0.072 },
];

export function ProductView() {
  const { color, scale, setColor, setScale } = useMacStore();
  const selectedFinish =
    finishes.find((finish) => finish.color === color)?.name ?? "Space Black";
  const selectedSize = scale === 0.058 ? "14" : "16";
  const isSilver = color === "#c8c8c8";

  return (
    <section id="product-viewer" aria-labelledby="viewer-title">
      <div className="viewer-heading reveal">
        <p className="eyebrow">Take a closer look.</p>
        <h2 id="viewer-title">Choose your finish. Compare the size.</h2>
      </div>
      <div className={clsx("product-stage", selectedSize === "16" && "large")}>
        <div className={clsx("finish-glow", isSilver ? "silver" : "space-black")} />
        <img
          className="product-photo"
          src="/performance5.jpg"
          alt={`MacBook Pro ${selectedSize} inch in ${selectedFinish}`}
          width="1280"
          height="720"
        />
        <div className="stage-copy">
          <span>{selectedSize}" model</span>
          <strong>{selectedFinish}</strong>
        </div>
      </div>
      <div className="controls">
        <p className="info">
          MacBook Pro {selectedSize}" in {selectedFinish}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control" aria-label="Finish options">
            {finishes.map((finish) => (
              <button
                key={finish.name}
                type="button"
                aria-label={`Select ${finish.name}`}
                aria-pressed={color === finish.color}
                className={clsx(finish.className, color === finish.color && "active")}
                onClick={() => setColor(finish.color)}
              />
            ))}
          </div>
          <div className="size-control" aria-label="Display size options">
            {sizes.map((size) => (
              <button
                key={size.label}
                type="button"
                aria-label={`Select ${size.label} inch MacBook Pro`}
                aria-pressed={scale === size.scale}
                className={clsx(
                  scale === size.scale
                    ? "bg-white text-black"
                    : "bg-transparent text-white",
                )}
                onClick={() => setScale(size.scale)}
              >
                {size.label}"
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
