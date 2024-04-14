import React from "react";
import CustomButton from "./CustomButton";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative w-full px-[15vh] pt-[15vh] pb-[25vh]">
      <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#17173f12_1px,transparent_1px),linear-gradient(to_bottom,#17173f12_1px,transparent_1px)] bg-[size:42px_42px] -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="z-50 flex flex-col gap-y-5 w-[70%]">
        <h1 className="text-8xl font-bold leading-tight text-median">
          The Power of Good Advice
        </h1>
        <h5 className="text-lg text-median font-normal">
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
