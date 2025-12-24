import React from "react";
import TransitionImg from "../assets/transition-img.png";

function Inspired() {
  return (
    <section className="inspired">
      <div className="inspired-head">
        <h1 className="inspire">
          Get inspired by our <br />
          community
        </h1>
        <a
          href="https://chat.whatsapp.com/GqOVZloiq2Z7qwVZCcxtJX"
          target="_blank"
        >
          <button>Join Now</button>
        </a>
      </div>

      {/* <div className="inspired-content">
        <h1>Videos</h1>
      </div> */}

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
          <a href="/contact">
            <button>Register Now!</button>
          </a>
        </div>

        <div className="transition-image">
          <img src={TransitionImg} alt="Transition" />
        </div>
      </div>
    </section>
  );
}

export default Inspired;
