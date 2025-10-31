import React from "react";
import Navbar from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Hero from "../components/home/hero/Hero";
import WhatYouLearn from "../components/home/WhatYouLearn/WhatYouLearn";
import Programs from "../components/home/Programs/Programs";
import About from "../components/home/About/About";
import Instructors from "../components/home/Instructors/Instructors";
import Testimonials from "../components/home/Testimonials/Testimonials";
import CTA from "../components/home/CTA/CTA";
import Contact from "../components/home/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <WhatYouLearn />
        <Programs />
        <About />
        <Instructors />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
