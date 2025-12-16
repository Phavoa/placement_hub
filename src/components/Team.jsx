import React from "react";
import AIImg from "../assets/AI-img.png";

function Team() {
  return (
    <section className="team-section flex justify-center">
      <div className="container">
        <h2 className="team-title">Behind the Wonders</h2>

        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-card">
            <div className="team-image">
              <div className="team-gradient consultant">
                <img src={AIImg} />
              </div>
              <div className="team-label">CEO</div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-card">
            <div className="team-image">
              <div className="team-gradient developer">
                <div className="team-avatar"></div>
              </div>
              <div className="team-label">DEVELOPER</div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-card">
            <div className="team-image">
              <div className="team-gradient designer">
                <div className="team-avatar"></div>
              </div>
              <div className="team-label">DESIGNER</div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="team-card">
            <div className="team-image">
              <div className="team-gradient analyst">
                <div className="team-avatar"></div>
              </div>
              <div className="team-label">ANALYST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
