"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';
import Image from 'next/image';
import profilePic from './profile.png';

const Sidebar = ({ isOpen, setSidebarOpen }) => {
  // Handle sidebar close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.sidebar') && !event.target.closest('.profile-button')) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen, setSidebarOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <Image
            src={profilePic}
            alt="Profile Picture"
            width={50}
            height={50}
            className="profile-picture"
          />
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experiences">Experience</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#hire-me">Hire Me</a></li>
        </ul>
      </nav>
      <div className="contact-icons">
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="mailto:your-email@example.com"><FaEnvelope /></a>
      </div>
    </div>
  );
};

export default Sidebar;
