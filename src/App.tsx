import { lazy, Suspense, useEffect } from "react";
import Hero from "./components/Hero";
import { MacLineup } from "./components/MacLineup";
import { Navbar } from "./components/Navbar";

const ProductView = lazy(() =>
  import("./components/ProductView").then((module) => ({
    default: module.ProductView,
  })),
);

const StoreExperience = lazy(() =>
  import("./components/StoreExperience").then((module) => ({
    default: module.StoreExperience,
  })),
);

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      let attempts = 0;
      const timer = window.setInterval(() => {
        const target = document.getElementById(id);
        attempts += 1;

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.clearInterval(timer);
        }

        if (attempts >= 80) window.clearInterval(timer);
      }, 100);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MacLineup />
        <Suspense fallback={<div className="section-loader">Loading product viewer</div>}>
          <ProductView />
        </Suspense>
        <Suspense fallback={<div className="section-loader">Loading store experience</div>}>
          <StoreExperience />
        </Suspense>
      </main>
    </>
  );
}

export default App;
