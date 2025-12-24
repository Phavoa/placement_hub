import React, { useEffect, useState } from "react";
import Hero1 from "../assets/hero-new1.png";
import Hero2 from "../assets/hero-new2.jpg";
import Hero3 from "../assets/hero-new3.jpg";
import Hero4 from "../assets/hero-new4.jpg";

const heroImages = [Hero1, Hero2, Hero3, Hero4];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImages[currentImage]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Join the Next Generation of Tech Leaders!
        </h1>
        <p className="hero-subtitle">
          Become a Globally Relevant Tech Expert; <br />
          Learn Cybersecurity, DevOps, Data Analytics, and AI/ML.
        </p>
        <div className="hero-buttons">
          <button className="get-started">
            <a href="/contact">Apply Now!</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
