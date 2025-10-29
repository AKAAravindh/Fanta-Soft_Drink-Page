import { useEffect } from "react";
import MainPage from "./pages/MainPage";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    document.title = "GSAP Scroller Drinks | FANTA";

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    lenis.on("scroll", ScrollTrigger.update);
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="select-none scroll-smooth">
      <MainPage />
    </section>
  );
}

export default App;
