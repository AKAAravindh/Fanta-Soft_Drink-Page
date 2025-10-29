import { useRef } from "react";
import AboutComponent from "../components/AboutComponent";
import HeroComponent from "../components/HeroComponent";
import NavbarComponent from "../components/NavbarComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MainPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useGSAP(() => {
    const { fantaCanImage, orangeSliceImage, orangeSliceImage2, orangeImage } =
      heroRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 99%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(
      fantaCanImage,
      {
        y: "100vh",
        left: "15vw",
        scale: 1,
        duration: 2,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeSliceImage,
      {
        y: "100vh",
        bottom: "35px",
        left: "15vw",
        scale: 0.9,
        duration: 2,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeSliceImage2.current,
      {
        marginLeft: "35%",
        duration: 2,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeImage,
      {
        y: "135vh",
        right: "0",
        translateX: "10%",
        scale: 0.8,
        duration: 2,
        ease: "none",
      },
      "same"
    );
  }, [heroRef]);

  return (
    <section className="overflow-hidden">
      <NavbarComponent />
      <HeroComponent ref={heroRef} />
      <AboutComponent ref={aboutRef} />
    </section>
  );
}

export default MainPage;
