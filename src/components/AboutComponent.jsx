import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutComponent = forwardRef((props, ref) => {
  const aboutItemsRef = useRef([]);
  const rightAboutItemsRef = useRef([]);

  useGSAP(() => {
    const aboutTl = gsap.timeline();

    aboutTl.fromTo(
      aboutItemsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "95% 95%",
          scrub: true,
        },
      }
    );

    aboutTl.fromTo(
      rightAboutItemsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "95% 95%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full h-screen p-4 bg-amber-950 relative lg:grid lg:grid-cols-[45vw_auto] items-center gap-15 xl:gap-0"
    >
      <div
        ref={(el) => (aboutItemsRef.current[0] = el)}
        className="w-125 aspect-[3.5/3] rounded-[50%] bottom-30 absolute left-[12vw] xl:left-[15vw] -translate-x-10"
      >
        <svg viewBox="30 35 150 130" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#7b3306"
            d="M49.9,-15.7C55.5,1,44.6,23.7,24.5,39.7C4.4,55.7,-24.8,65,-43.8,53C-62.7,40.9,-71.4,7.5,-62.4,-14C-53.4,-35.4,-26.7,-44.8,-2.3,-44C22.1,-43.3,44.3,-32.4,49.9,-15.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="h-screen w-full lg:w-0"></div>
      <div className="w-[90%] xl:w-[80%] z-6">
        <h1
          ref={(el) => (rightAboutItemsRef.current[0] = el)}
          className="text-[7rem] tracking-wide text-white/80 leading-none font-[VinaSans-Regular]"
        >
          FANTA
        </h1>
        <p
          ref={(el) => (rightAboutItemsRef.current[1] = el)}
          className="text-white/50 mt-5 text-[1.2vw]"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, totam
          impedit eum debitis voluptatem facilis quaerat at officiis, fuga
          placeat nisi consequatur earum voluptas deserunt vel quisquam minus
          delectus inventore ullam nostrum ipsa aut doloremque, quae aspernatur.
          Voluptates incidunt vero numquam porro delectus aliquam rerum dicta
          nihil sapiente mollitia quod sit, voluptatibus animi commodi placeat
          aperiam excepturi aliquid quis asperiores eaque ex modi? Dicta in
          fugit nesciunt illum, veniam deserunt doloremque accusantium
          excepturi, ratione eum, harum facere sequi ad quis qui debitis
          molestias fugiat inventore neque quasi dolorum. Deleniti labore
          expedita veniam at facere corporis ipsam maiores in, dicta quibusdam.
        </p>
        <button
          ref={(el) => (rightAboutItemsRef.current[2] = el)}
          className="bg-amber-600 px-14 py-4 text-xl rounded-full mt-6 text-white font-semibold cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
});

export default AboutComponent;
