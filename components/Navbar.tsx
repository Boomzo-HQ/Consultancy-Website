import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-4 md:px-8 max-w-[1440px] pt-4">
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
          {["Home", "Services", "About", "Testimonials", "Contact"].map(
            (option, idx) => {
              return (
                <a
                  href="#"
                  key={idx}
                  className="text-[#17173f] font-normal text-lg"
                >
                  {option}
                </a>
              );
            }
          )}
        </div>
        <CustomButton text="Call Now" />
      </div>
    </nav>
  );
};

export default Navbar;
