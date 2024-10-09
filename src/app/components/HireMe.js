"use client"; // Required for using hooks in Next.js

import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

const HireMe = () => {
  return (
    <div id="hire-me" className="hireme-section">
      <h1 className="hireme-title">Hire Me!</h1>
      <p>
        I am open to Full Time AI/ML roles and SWE roles starting Summer 2025!</p>
        <p>
        Here&apos;s how you can reach me:
        </p>
    <div className="contact-card">
          <FaEnvelope />
          <a href="mailto:hr2547@nyu.edu">hr2547@nyu.edu</a>
        </div>
      <div className="contact-info-container">
        
        <div className="contact-card">
          <FaLinkedin />
          <a href="https://linkedin.com/in/harshini-raju-8083181a0/" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="contact-card">
          <FaGithub />
          <a href="https://github.com/HarshiniR4" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>
      <div className="footer">&copy; 2024 Harshini Raju. All Rights Reserved.</div>
    </div>
  );
};

export default HireMe;
