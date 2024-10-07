// src/styles/Button.js

import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: #e1e1e1;
  background: transparent;
  border: 2px solid #e60073;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e60073;
    color: #fff;
  }
`;

export default Button;
