import fantaImage from "/src/assets/images/fanta.png";
import orangeSlice from "/src/assets/images/orange-slice.png";
import orangeImage from "/src/assets/images/orange.png";
import { forwardRef, useImperativeHandle, useRef } from "react";

const HeroComponent = forwardRef((props, ref) => {
  const fantaCanImageRef = useRef(null);
  const orangeSliceImageRef = useRef(null);
  const orangeImageRef = useRef(null);
  const orangeSliceImage2Ref = useRef(null);

  useImperativeHandle(ref, () => ({
    fantaCanImage: fantaCanImageRef.current,
    orangeSliceImage: orangeSliceImageRef.current,
    orangeSliceImage2: orangeSliceImage2Ref,
    orangeImage: orangeImageRef.current,
  }));

  return (
    <section className="w-full h-screen bg-linear-to-r from-[#ffa024] to-[#bf5f05] relative flex justify-center items-center">
      <h1 className="text-[25vw] font-bold text-white/80 font-montserrat leading-0 tracking-wider">
        FANTA
      </h1>
      <div
        ref={fantaCanImageRef}
        className="w-82 h-min translate-y-12 absolute z-5"
      >
        <img src={fantaImage} alt="Fanta Can Image" />
      </div>
      <div
        ref={orangeSliceImageRef}
        className="w-110 h-min -translate-y-35 absolute z-2"
      >
        <img
          ref={orangeSliceImage2Ref}
          className="w-62 mr-auto aspect-square"
          src={orangeSlice}
          alt="Fanta Can Image"
        />
      </div>
      <img
        ref={orangeImageRef}
        className="absolute z-8 w-72 h-72 translate-y-45 translate-x-30"
        src={orangeImage}
        alt="Orange Image"
      />
    </section>
  );
});

export default HeroComponent;
