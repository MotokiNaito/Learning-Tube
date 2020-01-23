import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../static/img/Learning-Tube.svg';

import './header.css';

type Props = {
  currentUser: string;
};

const Header: React.FC<Props> = ({ currentUser }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          {currentUser ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/my-list">My List</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign Out</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
