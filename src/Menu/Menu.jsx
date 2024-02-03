// Menu.jsx
import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";

function Menu({ menuState }) {
  return (
    <div className={`menu ${menuState ? "closed" : ""}`}>
      <li className="nav-item">
        <a className="nav-link" href="https://horribili.zapto.org">
          Horribili
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://kaet.zapto.org">
          KAET
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Sign in
        </Link>
      </li>
    </div>
  );
}

export default Menu;
