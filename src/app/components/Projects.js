// src/app/components/Projects.js

"use client";
require('dotenv').config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

import { graphql } from '@octokit/graphql';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
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
                            authorization: `token ${GITHUB_TOKEN}`, // Replace with your actual GitHub token.
                        },
                    }
                );

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
