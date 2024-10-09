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
              I&apos;m an M.S. Computer Science student at NYU, with a fascination for how AI and human cognition intersect. Whether it&apos;s building intelligent systems or exploring how tech can enhance neurodivergence research, I&apos;m always on the hunt for innovative ways to merge data science with real-world impact.
          </p>
          <p>
              My interests span everything from decoding the brain&apos;s mysteries with AI to creating smart solutions in fintech and cloud-based platforms. Basically, if it involves using tech to solve complex problems, count me in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
