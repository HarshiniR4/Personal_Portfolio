"use client";

import Image from "next/image";
import profilePic from "./profile.png"; // Placeholder, replace with the actual path to your profile picture.

const About = () => {
  return (
    <div id="about" className="full-page-section about-section">
      {/* Background color updated to match other pages */}
      
      <div className="about-container">
        <div className="profile-pic-container">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="profile-pic"
            width={1500}
            height={1500}
          />
        </div>
        <div className="about-content">
          <h1 className="main-title">About Me</h1>
          <p>
            Hi! I'm Harshini Raju, a Computer Science graduate student at New York University.
            I have a strong background in artificial intelligence, deep learning, and IoT technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
