import React from "react";

function workflow() {
  return (
    <section className="workflow-section flex justify-center">
      <div className="container">
        <div className="flow-container">
          {/* Learn */}
          <div className="flow-item">
            <button className="flow-button">Learn</button>
            <p className="flow-description">
              At Placement Hub, learning is not just a process; it's a journey
              of discovery and growth.
            </p>
          </div>

          {/* Arrow */}
          <svg className="arrow" viewBox="0 0 40 20" fill="none">
            <path
              d="M2 10L38 10M38 10L28 2M38 10L28 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Collaborate */}
          <div className="flow-item">
            <button className="flow-button collaborate">Collaborate</button>
            <p className="flow-description">
              Collaboration is at the heart of what we do at Placement Hub. We
              believe that by working together, we can achieve more.
            </p>
          </div>

          {/* Arrow */}
          <svg className="arrow" viewBox="0 0 40 20" fill="none">
            <path
              d="M2 10L38 10M38 10L28 2M38 10L28 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Evolve */}
          <div className="flow-item">
            <button className="flow-button">Evolve</button>
            <p className="flow-description">
              At Placement Hub, we’re committed to helping individuals evolve
              with the ever-changing industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default workflow;
