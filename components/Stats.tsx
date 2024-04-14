import React from "react";

const Statistic: React.FC<{ number: string; label: string }> = ({
  number,
  label,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 md:gap-2 text-white">
      <span className="text-2xl md:text-6xl font-bold">{number}</span>
      <span className="font-light text-base md:text-xl">{label}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#17173f] py-20 md:py-28">
      <div className="text-center text-white mb-14 md:mb-20">
        <h2 className="text-lg md:text-3xl font-bold">
          We&apos;re Good with Numbers
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-6">
        <Statistic number="15" label="Years of Experience" />
        <span className="hidden md:block text-white text-2xl">•</span>
        <Statistic number="36" label="Qualified Experts" />
        <span className="hidden md:block text-white text-2xl">•</span>
        <Statistic number="120" label="Clients Every Year" />
        <span className="hidden md:block text-white text-2xl">•</span>
        <Statistic number="9" label="Intl. Partners" />
      </div>
    </section>
  );
};

export default Stats;
