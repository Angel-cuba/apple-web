import clsx from "clsx";
import { useEffect, useState } from "react";
import { useMacStore } from "../store";

const links = [
  { label: "Store", href: "#shop" },
  { label: "Mac", href: "#mac-lineup" },
  { label: "Explore", href: "#product-viewer" },
  { label: "Compare", href: "#compare" },
  { label: "Accessories", href: "#accessories" },
  { label: "Support", href: "#support" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { setColor, setScale } = useMacStore();

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.slice(1);
      if (id) setActiveSection(id);
    };
    const sections = ["hero", ...links.map((link) => link.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  const jumpToModel = (scale: number, color: string) => {
    setScale(scale);
    setColor(color);
    document.querySelector("#product-viewer")?.scrollIntoView({ behavior: "smooth" });
  };

  const linkElements = links.map((link) => (
    <li key={link.label}>
      <a
        className={clsx(activeSection === link.href.slice(1) && "active")}
        href={link.href}
      >
        {link.label}
      </a>
    </li>
  ));

  return (
    <header>
      <nav aria-label="Primary navigation">
        <a href="#hero" aria-label="MacBook Pro home">
          <img src="/logo.svg" alt="" width="45" height="20" />
        </a>
        <ul>{linkElements}</ul>
        <div className="nav-pills" aria-label="Quick model links">
          <button type="button" onClick={() => jumpToModel(0.058, "#2e2c2e")}>
            14"
          </button>
          <button type="button" onClick={() => jumpToModel(0.072, "#c8c8c8")}>
            16"
          </button>
          <a href="#shop">Buy</a>
        </div>
        <div className="flex-center gap-4">
          <button className="icon-button" type="button" aria-label="Search">
            <img src="/search.svg" alt="" width="18" height="18" />
          </button>
          <a className="icon-button" href="#shop" aria-label="Open bag">
            <img src="/cart.svg" alt="" width="18" height="18" />
          </a>
        </div>
      </nav>
    </header>
  );
};
