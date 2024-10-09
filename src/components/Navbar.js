import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="brand">SIGILO</Link>
      <div>
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;