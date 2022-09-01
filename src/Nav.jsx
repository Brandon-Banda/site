import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <h1> home</h1>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/water">
          <li style={{ fontSize: "30px" }}>Water</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;