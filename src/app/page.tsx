"use client";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Stats from "../../components/Stats";
import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Testimonials from "../../components/Testimonials";
import Gmap from "../../components/Gmap";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Gmap />
    </div>
  );
}
