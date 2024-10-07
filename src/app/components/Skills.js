// src/app/components/Skills.js
"use client";

import { motion } from "framer-motion";
import { FaCode, FaTools, FaLayerGroup } from "react-icons/fa";

const Skills = () => {
  return (
    <motion.div
      id="skills" // Make sure this matches the link in the sidebar.
      className="skills-section full-page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="main-title">Skills</h1>
      <motion.div
        className="skills-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="skills-card">
          <FaCode className="skills-icon" />
          <h2 className="skills-title">Programming Languages</h2>
          <p>Python, C++, Java, SQL</p>
        </div>
        <div className="skills-card">
          <FaLayerGroup className="skills-icon" />
          <h2 className="skills-title">Frameworks/Libraries</h2>
          <p>Pandas, Numpy, TensorFlow, PyTorch, OpenCV</p>
        </div>
        <div className="skills-card">
          <FaTools className="skills-icon" />
          <h2 className="skills-title">Tools</h2>
          <p>Docker, Ansible, Google Cloud Platform (GCP), Spark, Hadoop</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
