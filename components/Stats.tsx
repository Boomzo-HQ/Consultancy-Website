import React from "react";

const Statistic: React.FC<{ number: string; label: string }> = ({
  number,
  label,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-white">
      <span className="text-6xl font-bold">{number}</span>
      <span className="font-light text-xl">{label}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#17173f] py-28">
      <div className="text-center text-white mb-20">
        <h2 className="text-3xl font-bold">We&apos;re Good with Numbers</h2>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Statistic number="15" label="Years of Experience" />
        <span className="text-white text-2xl">•</span>
        <Statistic number="36" label="Qualified Experts" />
        <span className="text-white text-2xl">•</span>
        <Statistic number="120" label="Clients Every Year" />
        <span className="text-white text-2xl">•</span>
        <Statistic number="9" label="Intl. Partners" />
      </div>
    </section>
  );
};

export default Stats;
