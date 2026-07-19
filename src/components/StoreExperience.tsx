import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const specs = [
  { value: "M5 Max", label: "Up to next-gen pro performance" },
  { value: "24 hrs", label: "Battery life for long creative days" },
  { value: "Liquid Retina XDR", label: "Extreme contrast and color" },
  { value: "7 ports", label: "Ready for studio workflows" },
];

const featureVideos = [
  {
    video: "/videos/feature-1.mp4",
    icon: "/feature-icon1.svg",
    title: "Built for Apple Intelligence",
    copy: "Powerful on-device workflows stay fast, fluid, and private.",
  },
  {
    video: "/videos/feature-2.mp4",
    icon: "/feature-icon2.svg",
    title: "Studio-grade display",
    copy: "High brightness, deep blacks, and reference-ready color.",
  },
  {
    video: "/videos/feature-3.mp4",
    icon: "/feature-icon3.svg",
    title: "Cool under pressure",
    copy: "Thermals keep demanding creative sessions steady.",
  },
];

const choices = {
  chip: [
    { label: "M5 Pro", price: 0 },
    { label: "M5 Max", price: 600 },
  ],
  memory: [
    { label: "24GB unified memory", price: 0 },
    { label: "48GB unified memory", price: 400 },
    { label: "64GB unified memory", price: 800 },
  ],
  storage: [
    { label: "512GB SSD", price: 0 },
    { label: "1TB SSD", price: 200 },
    { label: "2TB SSD", price: 600 },
  ],
};

const supportCards = [
  {
    title: "Specialist support",
    copy: "Get guided shopping help before you choose your configuration.",
  },
  {
    title: "Delivery or pickup",
    copy: "Choose fast delivery, easy pickup, or a setup session.",
  },
  {
    title: "Trade in",
    copy: "Apply estimated credit toward a new Mac at checkout.",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function Showcase() {
  return (
    <section id="showcase" aria-labelledby="showcase-title">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay muted playsInline loop />
        <div className="mask" aria-hidden="true">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>
      <div className="content reveal">
        <div className="wrapper">
          <div>
            <p className="eyebrow">MacBook Pro</p>
            <h2 id="showcase-title">A pro studio that opens anywhere.</h2>
          </div>
          <div className="max-w-xl space-y-6">
            <h3>Performance, battery, display, and silence move as one.</h3>
            <p>
              This page now behaves like a premium store experience: product
              story first, hands-on exploration second, and purchase decisions
              exactly where customers expect them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section id="performance" aria-labelledby="performance-title">
      <p className="eyebrow reveal">Performance</p>
      <h2 id="performance-title" className="reveal">
        Handles massive ideas without making them feel massive.
      </h2>
      <div className="wrapper" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <img
            key={item}
            className={`p${item} performance-tile`}
            src={`/performance${item}.${item === 5 ? "jpg" : "png"}`}
            alt=""
          />
        ))}
      </div>
      <div className="content reveal">
        <p>
          Edit high-resolution video, render complex scenes, compile large
          projects, and stay unplugged longer with a workflow built for pros.
        </p>
      </div>
    </section>
  );
}

function FeatureSpotlight() {
  return (
    <section id="features" aria-labelledby="features-title">
      <p className="eyebrow reveal">Inside the experience</p>
      <h2 id="features-title" className="reveal">
        Five details that make the page feel shoppable.
      </h2>
      <div className="feature-grid">
        {featureVideos.map((feature) => (
          <article className="feature-card reveal" key={feature.title}>
            <video src={feature.video} autoPlay muted playsInline loop />
            <div>
              <img src={feature.icon} alt="" width="36" height="36" />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title">
      <p className="eyebrow reveal">Highlights</p>
      <h2 id="highlights-title" className="reveal">
        The Apple Store rhythm, rebuilt with the assets already here.
      </h2>
      <h3 className="reveal">
        Clear product story, configurator, service promises, and a clean close.
      </h3>
      <div className="masonry">
        <div className="left-column reveal">
          <div>
            <p>Up to 24 hours of battery life.</p>
            <img src="/battery.png" alt="" width="220" height="220" />
          </div>
          <div>
            <img src="/ai.png" alt="" width="74" height="74" />
            <p>Ready for intelligent creative workflows.</p>
          </div>
        </div>
        <div className="right-column reveal">
          <div className="apple-gradient">
            <img src="/sun.png" alt="" width="74" height="74" />
            <p>
              <span>Bright, precise, cinematic.</span> Built around the display.
            </p>
          </div>
          <div>
            <p>
              Massive performance in a <span className="green-gradient">cooler</span>{" "}
              design.
            </p>
            <img src="/laptop.png" alt="" width="440" height="260" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyConfigurator() {
  const [chip, setChip] = useState(choices.chip[0]);
  const [memory, setMemory] = useState(choices.memory[0]);
  const [storage, setStorage] = useState(choices.storage[0]);
  const [appleCare, setAppleCare] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const total = useMemo(
    () => 2499 + chip.price + memory.price + storage.price + (appleCare ? 279 : 0),
    [appleCare, chip.price, memory.price, storage.price],
  );

  return (
    <section id="shop" className="shop-section" aria-labelledby="shop-title">
      <div className="shop-summary reveal">
        <p className="eyebrow">Buy MacBook Pro</p>
        <h2 id="shop-title">Build the Mac that fits your work.</h2>
        <p>
          A focused configurator gives the page a real store backbone without
          needing a backend yet.
        </p>
        <div className="price-block">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
          <small>or {formatPrice(Math.ceil(total / 12))}/mo. for 12 months</small>
        </div>
        <button type="button" className="buy-button" onClick={() => setBagOpen(true)}>
          Add to bag
        </button>
      </div>

      <div className="config-panel reveal">
        <ChoiceGroup title="Chip" options={choices.chip} value={chip.label} onChange={setChip} />
        <ChoiceGroup
          title="Memory"
          options={choices.memory}
          value={memory.label}
          onChange={setMemory}
        />
        <ChoiceGroup
          title="Storage"
          options={choices.storage}
          value={storage.label}
          onChange={setStorage}
        />
        <label className="care-option">
          <input
            type="checkbox"
            checked={appleCare}
            onChange={(event) => setAppleCare(event.target.checked)}
          />
          <span>
            <strong>Add protection</strong>
            AppleCare+ style coverage for accidental damage and expert support.
          </span>
          <b>+$279</b>
        </label>
      </div>

      {bagOpen && (
        <aside className="bag-drawer open" aria-label="Bag summary">
          <button type="button" className="close-button" onClick={() => setBagOpen(false)}>
            Close
          </button>
          <h3>Bag summary</h3>
          <p>MacBook Pro with {chip.label}</p>
          <ul>
            <li>{memory.label}</li>
            <li>{storage.label}</li>
            <li>{appleCare ? "AppleCare+ included" : "No protection plan selected"}</li>
          </ul>
          <strong>{formatPrice(total)}</strong>
          <button type="button" className="buy-button">
            Check out
          </button>
        </aside>
      )}
    </section>
  );
}

type Choice = {
  label: string;
  price: number;
};

function ChoiceGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: Choice[];
  value: string;
  onChange: (choice: Choice) => void;
}) {
  return (
    <fieldset className="choice-group">
      <legend>{title}</legend>
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          className={clsx("choice-card", value === option.label && "selected")}
          aria-pressed={value === option.label}
          onClick={() => onChange(option)}
        >
          <span>{option.label}</span>
          <small>{option.price === 0 ? "Included" : `+${formatPrice(option.price)}`}</small>
        </button>
      ))}
    </fieldset>
  );
}

function AccessoriesAndSupport() {
  return (
    <section id="accessories" className="support-section" aria-labelledby="support-title">
      <div className="reveal">
        <p className="eyebrow">Apple Store difference</p>
        <h2 id="support-title">Everything around the Mac matters too.</h2>
      </div>
      <div className="support-grid">
        {supportCards.map((card) => (
          <article className="support-card reveal" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
      <div id="compare" className="compare-strip reveal">
        <article className="compare-model">
          <img src="/performance5.jpg" alt="MacBook Pro 14 inch" width="640" height="360" />
          <div>
            <span>MacBook Pro 14"</span>
            <strong>Portable pro performance</strong>
            <small>Best for travel, coding, design, and daily studio work.</small>
          </div>
        </article>
        <article className="compare-model">
          <img src="/performance5.jpg" alt="MacBook Pro 16 inch" width="720" height="405" />
          <div>
            <span>MacBook Pro 16"</span>
            <strong>Larger canvas, longer sessions</strong>
            <small>Best for video, 3D, audio production, and multi-window work.</small>
          </div>
        </article>
      </div>
      <div className="spec-strip reveal">
        {specs.map((spec) => (
          <div key={spec.value}>
            <strong>{spec.value}</strong>
            <span>{spec.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="support">
      <div className="info">
        <p>
          MacBook Pro shopping concept. Built as a premium product-store
          imitation using local assets.
        </p>
        <a href="#hero">Back to top</a>
      </div>
      <hr />
      <div className="links">
        <p>Copyright 2026</p>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sales and refunds</li>
          <li>Legal</li>
        </ul>
      </div>
    </footer>
  );
}

export function StoreExperience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".performance-tile").forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -44 : 36,
          rotate: index % 2 === 0 ? -2 : 2,
          ease: "none",
          scrollTrigger: {
            trigger: "#performance",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <Showcase />
      <Performance />
      <FeatureSpotlight />
      <Highlights />
      <BuyConfigurator />
      <AccessoriesAndSupport />
      <Footer />
    </>
  );
}
