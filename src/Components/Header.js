import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Header = () => (
  <nav>
    <div className="navigation">
      <h1>
        <Link to="/"> Bookstore CMS </Link>
      </h1>
      <ul className="navbar">
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;
