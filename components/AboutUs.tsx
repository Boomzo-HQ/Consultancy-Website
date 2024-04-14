import React from "react";

const AboutUs = () => {
  const img =
    "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start bg-white">
      <div className="md:w-1/2 p-24 flex flex-col gap-y-7 md:h-[110vh]">
        <h3 className="text-base font-semibold text-minor uppercase tracking-widest">
          About
        </h3>
        <h2 className="text-4xl text-median font-bold">
          Our Experts Are the Finest
        </h2>
        <div className="flex flex-col gap-y-4">
          <p className="text-lg font-light text-median tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            magni numquam velit nobis fugiat maiores voluptas laborum culpa
            porro natus, consectetur sequi voluptatibus doloremque quod
            inventore quas, dolor iste ullam corporis omnis ut esse. Molestiae
            consequuntur recusandae vitae magni fugit omnis? Eos facere sapiente
          </p>
          <p className="text-lg font-light text-median tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            inventore tempora explicabo vero rerum eveniet omnis quidem voluptas
            eaque ipsam et odit, quibusdam libero distinctio reiciendis soluta
            optio ad similique. Odit possimus voluptatem commodi laborum tempore
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex-grow">
        <img
          src={img}
          alt="img"
          className="flex-grow object-fill md:h-[110vh]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
