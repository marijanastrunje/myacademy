import React from "react";
import Navbar from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/hero/Hero";
import Programs from "../components/Programs/Programs";
import About from "../components/About/About";
import Instructors from "../components/Instructors/Instructors";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Instructors />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
