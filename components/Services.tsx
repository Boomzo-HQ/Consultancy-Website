import { Activity, Briefcase, Calculator } from "lucide-react";
import React from "react";

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
}> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 py-4 px-10">
      <div className="">{icon}</div>
      <h3 className="text-base font-semibold text-median">{title}</h3>
      <p className="text-median text-center font-light text-lg leading-6">
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-20 flex flex-col gap gap-y-20">
      <section className="text-center flex flex-col items-center justify-center">
        <h2 className="text-base text-minor font-bold uppercase tracking-widest">
          Services
        </h2>
        <p className="mt-4 text-4xl w-1/3 leading-tight font-bold text-median">
          Taking Your Business to the Next Level
        </p>
      </section>
      <section>
        <div className="w-full px-[15vh]">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* You would replace the SVG with your actual icons */}
            <FeatureCard
              title="Business Plans"
              description="I'm a paragraph. Click here to add your own text and edit me."
              icon={<Briefcase size={40} />}
            />
            <FeatureCard
              title="Accounting Services"
              description="I'm a paragraph. Click here to add your own text and edit me."
              icon={<Calculator size={40} />}
            />
            <FeatureCard
              title="Finance Optimization"
              description="I'm a paragraph. Click here to add your own text and edit me."
              icon={<Activity size={40} />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
