import React, { useState } from "react";

function AboutVideo() {
  const [videoExpanded, setVideoExpanded] = useState(false);

  const handleVideoClick = () => {
    setVideoExpanded(!videoExpanded);
  };

  return (
    <section className="video-section flex justify-center">
      <div className="container m-auto">
        <div className="video-container">
          {/* Video Card */}
          <div
            className={`video-card ${videoExpanded ? "expanded" : ""}`}
            onClick={handleVideoClick}
          >
            {/* Background Video */}
            <div className="video-background">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/7a8H39VIqJY?autoplay=1&mute=1&loop=1&playlist=7a8H39VIqJY&controls=${videoExpanded ? 1 : 0}&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3`}
                title="Simple Responsive Login Page using HTML & CSS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>

            {/* Video Overlay */}
            <div className="video-overlay-content">
              <div className="video-header">
                <h3 className="video-title">Featured Tutorial</h3>
                {!videoExpanded && (
                  <div className="play-button-overlay">
                    <div className="play-icon"></div>
                  </div>
                )}
              </div>
              <div className="video-content">
                <div className="video-avatar"></div>
                <div className="video-info">
                  <h4>Responsive Login Page</h4>
                  <p>Click to play with audio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content-section">
            <div className="expert-item">
              <div className="expert-icon">
                <div className="expert-icon-inner"></div>
              </div>
              <div className="expert-text">
                <h4>Expert Guidance</h4>
                <p>Professional mentorship</p>
              </div>
            </div>

            <div>
              <p className="content-text">
                According to the research of Daniels, we have discovered that
                most people struggle with achieving their goals due to lack of
                proper guidance and structured approach to learning.
              </p>
              <p className="content-text">
                Our comprehensive program combines theoretical knowledge with
                practical application, ensuring that participants not only learn
                but also implement what they've learned in real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
