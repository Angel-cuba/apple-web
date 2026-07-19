import clsx from "clsx";
import { useMacStore } from "../store";

const models = [
  {
    size: "14",
    scale: 0.058,
    name: "MacBook Pro 14\"",
    price: "From $1,999",
    badge: "Portable powerhouse",
    finish: "#2e2c2e",
    specs: ["M5 Pro or M5 Max", "Up to 18 hours", "1.55 kg"],
  },
  {
    size: "16",
    scale: 0.072,
    name: "MacBook Pro 16\"",
    price: "From $2,499",
    badge: "Maximum canvas",
    finish: "#c8c8c8",
    specs: ["M5 Max ready", "Up to 24 hours", "Larger XDR display"],
  },
];

export function MacLineup() {
  const { scale, setColor, setScale } = useMacStore();

  const selectModel = (model: (typeof models)[number]) => {
    setScale(model.scale);
    setColor(model.finish);
    document.querySelector("#product-viewer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="mac-lineup" className="lineup-section" aria-labelledby="lineup-title">
      <div className="lineup-heading">
        <p className="eyebrow">Shop Mac</p>
        <h2 id="lineup-title">Which MacBook Pro is right for you?</h2>
        <p>
          Pick a size first, then jump into the interactive product view to spin,
          finish, and configure it.
        </p>
      </div>

      <div className="lineup-grid">
        {models.map((model) => (
          <article
            key={model.size}
            className={clsx("lineup-card", scale === model.scale && "selected")}
          >
            <span className="lineup-badge">{model.badge}</span>
            <div className="lineup-visual" aria-hidden="true">
              <img src="/performance5.jpg" alt="" width="1280" height="720" />
            </div>
            <div className="lineup-content">
              <div>
                <h3>{model.name}</h3>
                <p>{model.price}</p>
              </div>
              <ul>
                {model.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <button type="button" className="buy-button" onClick={() => selectModel(model)}>
                View {model.size}" model
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
