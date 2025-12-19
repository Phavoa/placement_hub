import React from "react";
import { useNavigate } from "react-router-dom";
import CyberImg from "../assets/cybersecurity-img.png";
import DevOpsImg from "../assets/devops-img.png";
import DataAnalytics from "../assets/data-analytics-img.png";
import AIML from "../assets/ai-img.png";

const cardData = [
  {
    title: "Cybersecurity",
    image: CyberImg,
    bgColor: "bg-cyber",
    list: [
      "Introduction to Cybersecurity",
      "Understanding Devices, Networks & the Internet",
      "Cyber Threats and Attack Vectors",
      "Protecting Yourself Online",
      "Introduction to Security Tools and Practices",
      "Careers in Cybersecurity and Next Steps",
    ],
  },
  {
    title: "DevOps & System Administration",
    image: DevOpsImg,
    bgColor: "bg-devops",
    list: [
      "Introduction to System Administration and DevOps",
      "Desktop Systems",
      "Operating Systems Basics (Linux/Windows)",
      "Command Line and Scripting Fundamentals",
      "Networking and Server Management Basics",
      "Intro to DevOps Culture and Practices",
      "Tools Overview: Git, CI/CD, Docker, Kubernetes",
    ],
  },
  {
    title: "Data Analytics",
    image: DataAnalytics,
    bgColor: "bg-cyber",
    list: [
      "Intro to Data Analytics and the Data Lifecycle",
      "Types of Data and Data Sources",
      "Basics of Data Cleaning and Preparation",
      "Intro to Data Visualization",
      "Tools Overview: Excel, SQL, Python, Tableau",
      "Interpreting Results and Telling Data Stories",
    ],
  },
  {
    title: "AI & Machine Learning",
    image: AIML,
    bgColor: "bg-devops",
    list: [
      "Intro to Artificial Intelligence and ML",
      "Types of ML: Supervised, Unsupervised, Reinforcement",
      "Key Concepts: Algorithms, Models, Training & Testing",
      "Basic Statistics and Linear Algebra for ML",
      "Common Tools: Python, scikit-learn, TensorFlow",
      "Applications and Ethics of AI in the Real World",
    ],
  },
];

function Card() {
  const navigate = useNavigate();

  const handleEnrollClick = (courseTitle) => {
    navigate("/contact", {
      state: {
        selectedCourse: courseTitle,
        isEnrollment: true,
      },
    });
  };

  return (
    <div className="app-container">
      {cardData.map((item, index) => (
        <div
          className="card"
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={`card-content ${item.bgColor}`}>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="buttons">
              <button
                className="enrol"
                onClick={() => handleEnrollClick(item.title)}
              >
                Enrol Now
              </button>
              {/* <button className="explore">Explore →</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
