import React from "react";
import CustomButton from "./CustomButton";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full px-[5vw] lg:px-[10vw] pt-[15vh] pb-[15vh] lg:pb-[15vh]">
      {/* grid */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#17173f12_1px,transparent_1px),linear-gradient(to_bottom,#17173f12_1px,transparent_1px)] bg-[size:42px_42px] -z-10"></div>
      {/* white fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      {/* content */}
      <div className="z-50 sm:w-full flex flex-col items-center lg:items-start gap-y-5 md:w-[70%]">
        <h1 className="text-3xl lg:text-8xl font-bold leading-tight text-median text-center lg:text-left">
          The Power of Good Advice
        </h1>
        <h5 className="text-sm text-center lg:text-left lg:text-lg text-median font-normal">
          Streamline your path to success with BizBud&apos;s expert guidance. We
          equip you with actionable insights and strategies to elevate your
          business at every stage. Let navigate the journey to your goals
          together—efficiently and effectively.
        </h5>
        <div className="flex gap-6 items-center">
          <CustomButton text="Book Apointment" />
          {/* <Button variant={"link"}>Call Now</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
