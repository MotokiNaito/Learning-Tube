import React from 'react';
import './header.css';

interface Props {
  currentUser: string;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  return (
    <header>
      <div className="Logo">Learning-Tube</div>
      <nav>
        <ul>
          {currentUser ? (
            <>
              <li>My List</li>
              <li>Profile</li>
            </>
          ) : (
            <li>Sign In</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
