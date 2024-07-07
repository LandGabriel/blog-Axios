import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // Return statement is required to render JSX in functional components
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            New post
          </Link>
        </li>
        <li>
          <Link to={`/admin`}>Gerenciar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
