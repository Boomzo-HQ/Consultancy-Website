import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-8 max-w-[1440px] pt-4">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          {/* Website Logo */}
          <a href="#" className="flex items-center py-4 px-2">
            <span className="font-semibold text-[#17173f] text-3xl">
              BizBud
            </span>
          </a>
        </div>
        {/* Primary Navbar items */}
        <div className="hidden md:flex items-center gap-8">
          {/* <a href="#" className="text-[#9e3efc] font-normal text-lg">
            Home
          </a>
          <a href="#" className="text-[#17173f] font-normal text-lg">
            Services
          </a> */}
          {["Home", "Services", "About", "Testimonials", "Contact"].map(
            (option, idx) => {
              return (
                <a href="#" className="text-[#17173f] font-normal text-lg">
                  {option}
                </a>
              );
            }
          )}
        </div>
        {/* cta */}
        {/* <div className="hidden md:flex h-fit w-fit px-8 py-3 rounded-3xl items-center justify-end bg-[#9e3efc] text-white hover:bg-[#17173f] hover:cursor-pointer transition duration-300"> */}
        {/* Call Now */}
        {/* </div> */}
        <CustomButton text="Call Now" />
      </div>
    </nav>
  );
};

export default Navbar;
