import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "GSAP Scroller Drinks | FANTA";

    const lenis = new Lenis({
      lerp: 0.05,
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

    const onPageLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="select-none scroll-smooth max-w-[1920px] max-h-[1080px] mx-auto p-0 my-0 bg-linear-to-r from-[#ff9100] to-[#be5c01]">
      {isLoaded ? (
        <MainPage />
      ) : (
        <div className="absolute inset-0 bg-linear-to-r from-[#ff9100] to-[#be5c01] text-amber-900 text-4xl font-[VinaSans-Regular] tracking-wide flex justify-center items-center">
          Loading...
        </div>
      )}
    </section>
  );
}

export default App;
