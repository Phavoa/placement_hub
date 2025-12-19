import React from "react";
import Navbar from "./Navbar";
import Workflow from "./workflow";
import AboutVideo from "./about-video";
import Services from "./Services";
import Team from "./Team";
import TransitionImg from "../assets/transition-img.png";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AboutHero from "./About-hero";

function About() {
  return (
    <section className="about-container">
      <Navbar />
      <AboutHero />
      <Workflow />
      <AboutVideo />
      <Services />
      {/* <Team /> */}
      <div className="transition">
        <div className="transition-content">
          <h1 className="transit">Transition into Tech Today!</h1>
          <h2>
            Register now and take the first step towards a <br /> brighter
            future!
          </h2>
          <p>
            Join us at Placement-Hub Academy and embark on a journey to <br />
            unlock your full potential in the dynamic world of IT and <br />
            entrepreneurship.
          </p>
          <button>Register Now!</button>
        </div>

        <div className="transition-image">
          <img src={TransitionImg} alt="Transition" />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </section>
  );
}

export default About;
