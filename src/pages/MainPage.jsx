import { useRef } from "react";
import AboutComponent from "../components/AboutComponent";
import HeroComponent from "../components/HeroComponent";
import NavbarComponent from "../components/NavbarComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CardsComponent from "../components/CardsComponent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MainPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const cardsRef = useRef(null);

  const mainContentRef = useRef(null);

  useGSAP(() => {
    const {
      fantaCanImage,
      fantaCanImage2,
      orangeSliceImage,
      orangeSliceImage2,
      orangeImage2,
    } = heroRef.current;

    gsap.to(mainContentRef.current, {
      opacity: 1,
      ease: "power1.in",
      duration: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 99%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top bottom",
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
        duration: 4,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeSliceImage,
      {
        y: "100vh",
        transform: "translateY(100%)",
        left: "16.5vw",
        duration: 4,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeSliceImage2.current,
      {
        marginLeft: "35%",
        rotate: "-180deg",
        duration: 4,
        ease: "none",
        translateY: "10vw",
      },
      "same"
    );
    tl.to(
      orangeImage2,
      {
        y: "110vh",
        translateX: "30vw",
        duration: 4,
        ease: "none",
      },
      "same"
    );
    tl.to(
      orangeImage2.current,
      {
        translateY: "15vw",
        duration: 4,
        ease: "none",
      },
      "same"
    );

    tl2.to(
      fantaCanImage,
      {
        y: "236.2vh",
        duration: 6,
        ease: "none",
        x: "24.7vw",
      },
      "same2"
    );
    tl2.to(
      fantaCanImage2,
      {
        translateY: "-17.3vw",
        ease: "none",
        duration: 6,
      },
      "same2"
    );
    tl2.to(
      orangeSliceImage,
      {
        scale: 1.3,
        translateX: "17vw",
        y: "195.5vh",
        duration: 6,
        ease: "none",
      },
      "same2"
    );
    tl2.to(
      orangeSliceImage2.current,
      {
        translateY: "-5.5vw",
        rotate: "45deg",
        ease: "none",
        duration: 6,
      },
      "same2"
    );
  }, [heroRef]);

  return (
    <div ref={mainContentRef} className="overflow-hidden opacity-0">
      <NavbarComponent />
      <HeroComponent ref={heroRef} />
      <AboutComponent ref={aboutRef} />
      <CardsComponent ref={cardsRef} />
    </div>
  );
}

export default MainPage;
