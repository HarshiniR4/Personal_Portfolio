// src/app/components/Experience.js
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: 2024,
    title: "Computer Science Intern",
    company: "Black Creek Digital LLC",
    description: "Built an automated scraping app to analyze GPU cloud platforms and worked on an automated profit optimization software for a cryptocurrency mining site.",
  },
  {
    year: 2023,
    title: "Technical Intern",
    company: "Centre of Excellence in Wireless Technology",
    description: "Developed and tested a wide-band wireless communication system for defence and strategic applications, and implemented remote setup for 5G Core packages.",
  },
  {
    year: 2022,
    title: "NLP Intern",
    company: "Insuryze Innovation Labs Private Limited",
    description: "Created an Insurance smart application utilizing NLP to extract information from policies for a Cyber Insurance Platform.",
  },
  {
    year: 2021,
    title: "Deep Learning Intern",
    company: "ROOT2AI India Pvt Ltd",
    description: "Proposed an NLP framework for chatbot prompts and built a chatbot using Rasa framework to interact and answer user questions in real-time.",
  },
];

const Experience = () => {
  return (
    <motion.div
      className="experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="main-title">Experience</h1>
      <div id="experiences" className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <span
              className={`timeline-year ${index % 2 === 0 ? 'year-left' : 'year-right'}`}
            >
              {exp.year}
            </span>
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>{exp.title}</h2>
              <h3><strong>{exp.company}</strong></h3>
              <p>{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
