import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductView } from "./components/ProductView";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductView />
    </main>
  );
}

export default App;
