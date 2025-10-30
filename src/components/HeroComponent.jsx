import { forwardRef, useImperativeHandle, useRef } from "react";

import fantaImage from "/src/assets/images/fanta.png";
import orangeSlice from "/src/assets/images/orange-slice.png";
import orangeImage from "/src/assets/images/orange.png";
import coconutLeafImage from "/src/assets/images/coconut-leaf.png";

import leafOne from "/src/assets/images/leafs/1.png";
// import leafTwo from "/src/assets/images/leafs/2.png";
import leafThree from "/src/assets/images/leafs/3.png";
import leafFour from "/src/assets/images/leafs/4.png";
import leafFive from "/src/assets/images/leafs/5.png";

const HeroComponent = forwardRef((props, ref) => {
  const fantaCanImageRef = useRef(null);
  const fantaCanImage2Ref = useRef(null);
  const orangeSliceImageRef = useRef(null);
  const orangeSliceImage2Ref = useRef(null);
  const orangeImageRef = useRef(null);
  const orangeImageRef2 = useRef(null);

  const leafOneRef = useRef(null);
  const leafTwoRef = useRef(null);
  const leafThreeRef = useRef(null);
  const leafFourRef = useRef(null);
  const leafFiveRef = useRef(null);

  useImperativeHandle(ref, () => ({
    fantaCanImage: fantaCanImageRef.current,
    fantaCanImage2: fantaCanImage2Ref.current,
    orangeSliceImage: orangeSliceImageRef.current,
    orangeSliceImage2: orangeSliceImage2Ref,
    orangeImage: orangeImageRef.current,
    orangeImage2: orangeImageRef2.current,

    leafOne: leafOneRef.current,
    leafTwo: leafTwoRef.current,
    leafThree: leafThreeRef.current,
    leafFour: leafFourRef.current,
    leafFive: leafFiveRef.current,
  }));

  return (
    <section className="w-full pt-25 sm:p-0 h-screen bg-linear-to-r from-[#ff9100] to-[#be5c01] relative flex justify-center items-center">
      <h1 className="text-[25vw] font-extrabold text-white sm:text-white/80 font-montserrat leading-0 tracking-wider">
        FANTA
      </h1>
      <div
        ref={fantaCanImageRef}
        className="w-70 sm:w-[20vw] sm:h-min grid sm:block place-items-center justify-center sm:translate-y-12 absolute z-5 pointer-events-none"
      >
        <img ref={fantaCanImage2Ref} src={fantaImage} alt="Fanta Can Image" />
      </div>
      <div
        ref={orangeSliceImageRef}
        className="w-full h-min -translate-y-45 translate-x-10 sm:bg-transparent sm:w-[25vw] sm:h-min sm:-translate-y-[10vw] absolute z-2"
      >
        <img
          ref={orangeSliceImage2Ref}
          className="w-35 sm:w-[13vw] mr-auto aspect-square sm:opacity-100"
          src={orangeSlice}
          alt="Fanta Can Image"
        />
      </div>
      <div
        ref={orangeImageRef}
        className="absolute z-8 w-50 sm:w-[15vw] translate-x-15 translate-y-35 sm:translate-y-[12vw] sm:translate-x-30"
      >
        <img ref={orangeImageRef2} src={orangeImage} alt="Orange Image" />
      </div>
      <img
        className="absolute right-0 top-0 w-[35vw]"
        src={coconutLeafImage}
        alt="Coconut Leaf Image"
      />

      <div className="absolute inset-0 pointer-events-none perspective-distant">
        <img
          className="absolute w-[14vw] top-20 right-100 -rotate-x-10 -rotate-y-30 -rotate-z-10 -z-1 opacity-100 grayscale-0"
          src={leafOne}
          alt="Leaf One"
        />
      </div>
      {/* <img
        className="absolute w-[9vw] top-0 left-100 -rotate-x-40 -rotate-y-20 -rotate-z-20 opacity-70"
        src={leafTwo}
        alt="Leaf Two"
      /> */}
      <img
        className="absolute w-[20vw] top-20 left-20 -rotate-x-30 -rotate-y-10 -rotate-z-10"
        src={leafThree}
        alt="Leaf Three"
      />
      <img
        className="absolute w-[18vw] bottom-2 left-70 rotate-x-320 -rotate-y-170 -rotate-z-190"
        src={leafFour}
        alt="Leaf Four"
      />
      <img
        className="absolute w-[15vw] right-[15vw] bottom-15"
        src={leafFive}
        alt="Leaf Five"
      />
    </section>
  );
});

export default HeroComponent;
