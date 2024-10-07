"use client";

import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  text-align: center;
`;

const HeroText = styled(motion.h1)`
  font-size: 4rem;
  color: #f5f5f5;
  max-width: 800px;
`;

const Hero = () => (
  <HeroSection>
    <HeroText
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      Welcome to My Interactive Portfolio <br />
      Exploring the World of AI and Creative Technology
    </HeroText>
  </HeroSection>
);

export default Hero;
