"use client";

import { graphql } from '@octokit/graphql';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub} from 'react-icons/fa';


const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Change here to use NEXT_PUBLIC prefix

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!GITHUB_TOKEN) {
        console.error("GitHub Token is missing or not being read correctly.");
        return;
      }

      console.log("GitHub Token:", GITHUB_TOKEN); // Check if token is being read correctly

      try {
        const { viewer } = await graphql(
          `
            {
              viewer {
                repositories(first: 6, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC, isFork: false) {
                  nodes {
                    id
                    name
                    description
                    url
                    stargazerCount
                  }
                }
              }
            }
          `,
          {
            headers: {
              authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );

        console.log("Number of projects fetched:", viewer.repositories.nodes.length);
        setProjects(viewer.repositories.nodes);
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p>These projects are linked directly from my <FaGithub />
      <a href="https://github.com/HarshiniR4" target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
    </p>
      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-details">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.a>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
