import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">Tutorial Blog</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
          <Link to="/about" className="nav-link">About <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
          <Link to="/articles-list" className="nav-link">Article List</Link>

      </li>
     
    </ul>
  </div>
</nav>
)

export default NavBar;