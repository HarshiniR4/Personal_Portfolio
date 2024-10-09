"use client";

import Image from 'next/image';
import profilePic from './profile.png';

const Header = ({ onProfileClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button onClick={onProfileClick} className="profile-button">
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={50}
            height={50}
            className="profile-picture"
          />
        </button>
      </div>
      <div className="header-right">
        <a href="mailto:hr2547@nyu.edu" className="hire-me-button">Hire Me</a>
      </div>
    </header>
  );
};

export default Header;
