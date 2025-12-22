import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CyberImg from "../assets/cybersecurity-img.png";
import DevOpsImg from "../assets/devops-img.png";
import DataAnalytics from "../assets/data-analytics-img.png";
import AIML from "../assets/ai-img.png";
import FullStack from "../assets/fullstack.jpg";

const cardData = [
  {
    title: "Ethical Hacking & Cyber Security",
    image: CyberImg,
    bgColor: "bg-cyber",
    list: [
      "Introduction to Cybersecurity and Ethical Hacking",
      "Understanding Devices, Networks & the Internet",
      "Cyber Threats and Attack Vectors",
      "Penetration Testing and Vulnerability Assessment",
      "Introduction to Security Tools and Practices",
      "Legal and Ethical Considerations in Hacking",
    ],
  },
  {
    title: "Python For Data Analysis",
    image: DataAnalytics,
    bgColor: "bg-cyber",
    list: [
      "Intro to Data Analytics and the Data Lifecycle",
      "Python Programming Basics for Data Analysis",
      "Data Cleaning and Preparation with Python",
      "Data Visualization with Matplotlib and Seaborn",
      "Working with Pandas and NumPy Libraries",
      "Interpreting Results and Telling Data Stories",
    ],
  },
  {
    title: "Full Stack",
    image: FullStack,
    bgColor: "bg-devops",
    list: [
      "Frontend Technologies: HTML, CSS, JavaScript",
      "Bootstrap Framework for Responsive Design",
      "Next JS for Modern Frontend Development",
      "Python Backend Development",
      "Database Integration and API Development",
      "Full Stack Project Development and Deployment",
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
    title: "AI Integration For Professionals",
    image: AIML,
    bgColor: "bg-cyber",
    list: [
      "AI Integration for Healthcare Specialists",
      "AI Integration for Finance & Accounting Professionals",
      "AI Integration for Teachers",
      "Understanding AI Tools and Applications",
      "Implementing AI Solutions in Professional Workflows",
      "Ethics and Best Practices in AI Integration",
    ],
  },
];

function Card() {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Staggered animation effect
    const timer = setTimeout(() => {
      cardData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleEnrollClick = (courseTitle) => {
    navigate("/contact", {
      state: {
        selectedCourse: courseTitle,
        isEnrollment: true,
      },
    });
  };

  return (
    <div className="courses-grid-container">
      <div className="app-container">
        {cardData.map((item, index) => (
          <div
            className={`card ${visibleCards.includes(index) ? "card-visible" : "card-hidden"}`}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
