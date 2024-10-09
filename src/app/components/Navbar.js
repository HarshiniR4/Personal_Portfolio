"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background: rgba(17, 17, 17, 0.85);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #f5f5f5;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e91e63;
  }
`;

const Navbar = () => (
  <Nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1 }}
  >
    <div>
      <Link href="/">
        <span style={{ color: '#e91e63', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Harshini Raju
        </span>
      </Link>
    </div>
    <NavList>
      <li><NavLink href="#about">About</NavLink></li>
      <li><NavLink href="#skills">Skills</NavLink></li>
      <li><NavLink href="#projects">Projects</NavLink></li>
      <li><NavLink href="#experience">Experience</NavLink></li>
      <li><NavLink href="#contact">Hire Me</NavLink></li>
    </NavList>
  </Nav>
);

export default Navbar;
