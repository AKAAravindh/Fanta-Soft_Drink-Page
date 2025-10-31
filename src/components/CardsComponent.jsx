import gsap from "gsap";
import { forwardRef, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import spriteCanImage from "/src/assets/images/sprite.png";
import liptonCanImage from "/src/assets/images/lipton.png";
// import pepsiCanImage from "/src/assets/images/pepsi2.png";
import limeSliceImage from "/src/assets/images/lime-slice.png";
import appleImage from "/src/assets/images/apple.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CardsComponent = forwardRef((props, ref) => {
  const cardsRef = useRef([]);
  const lemonImageContainerRef = useRef(null);
  const liptonImageContainerRef = useRef(null);
  const spriteCanImageRef = useRef(null);
  const liptonCanImageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 70%",
        end: "95% 95%",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(
      cardsRef.current,
      {
        opacity: 1,
        duration: 2,
        // stagger: 0.5,
        // ease: "none",
      },
      "same"
    );

    tl.fromTo(
      lemonImageContainerRef.current,
      { y: 300, x: "-800px", opacity: 1, rotateZ: "360deg" },
      { y: 0, x: 0, opacity: 1, duration: 3, rotateZ: 0 },
      "same"
    );
    tl.fromTo(
      liptonImageContainerRef.current,
      { y: 300, x: "800px", opacity: 1, rotateZ: "-360deg" },
      { y: 0, x: 0, opacity: 1, duration: 3, rotateZ: 0 },
      "same"
    );
    tl.fromTo(
      spriteCanImageRef.current,
      { y: 300, x: "-500px", opacity: 1, rotateZ: "-135deg" },
      { y: 0, x: 0, opacity: 1, duration: 3, rotateZ: 0 },
      "same"
    );
    tl.fromTo(
      liptonCanImageRef.current,
      { y: 300, x: "500px", opacity: 1, rotateZ: "135deg" },
      { y: 0, x: 0, opacity: 1, duration: 3, rotateZ: 0 },
      "same"
    );
  }, []);

  //
  // Add border for cards like in the mockup
  //

  return (
    <section
      ref={ref}
      className="h-screen w-full bg-amber-950 flex justify-center items-center"
    >
      <div className="w-full grid grid-cols-3 px-30 mt-[25vh]">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-[#2ea961] w-[80%] h-[60vh] place-self-center rounded-4xl flex flex-col items-center relative opacity-0 border-6 border-white z-10"
        >
          <div className="absolute w-[90%] -top-[10vw]">
            <img
              className="relative"
              ref={lemonImageContainerRef}
              src={limeSliceImage}
              alt="Lemon Slice Image"
            />
          </div>
          <div
            ref={spriteCanImageRef}
            className="w-70 sm:w-[20vw] sm:h-min absolute bottom-[6.5vw]"
          >
            <img className="" src={spriteCanImage} alt="Fanta Can Image" />
          </div>
          <div className="absolute bottom-[1vw] text-center w-full">
            <h1 className="text-[2.5vw] leading-none text-white font-[VinaSans-Regular] tracking-wide">
              SPRITE
            </h1>
            <button className="bg-white text-[#2ea961] w-[60%] aspect-5/1 rounded-full mt-3 mb-[0.5vw] text-lg font-bold cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-[#f2a532] w-[80%] h-[60vh] place-self-center rounded-4xl flex flex-col items-center relative opacity-0 border-6 border-white z-10"
        >
          <div className="absolute bottom-[1vw] text-center w-full">
            <h1 className="text-[2.5vw] leading-none text-white font-[VinaSans-Regular] tracking-wide">
              FANTA
            </h1>
            <button className="bg-white text-[#f2a532] w-[60%] aspect-5/1 rounded-full mt-2 mb-[0.5vw] text-lg font-bold cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="bg-[#f76b47] w-[80%] h-[60vh] place-self-center rounded-4xl flex flex-col items-center relative opacity-0 border-6 border-white z-10"
        >
          <div
            ref={liptonImageContainerRef}
            className="absolute w-[90%] -top-[11vw]"
          >
            <img src={appleImage} alt="Lemon Slice Image" />
          </div>
          <div
            ref={liptonCanImageRef}
            className="w-70 sm:w-[20vw] sm:h-min absolute bottom-[6.5vw]"
          >
            <img className="" src={liptonCanImage} alt="Fanta Can Image" />
          </div>
          <div className="absolute bottom-[1vw] text-center w-full">
            <h1 className="text-[2.5vw] leading-none text-white font-[VinaSans-Regular] tracking-wide">
              LIPTON
            </h1>
            <button className="bg-white text-[#f76b47] w-[60%] aspect-5/1 rounded-full mt-3 mb-[0.5vw] text-lg font-bold cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CardsComponent;
