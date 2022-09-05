import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { navItems } from "./Navitems";
import Dropdown from "./Dropdown";
import { ReactComponent as CaretIcon } from '../icons/caret.svg';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* <Link to="/" className="navbar-logo">
          flux
        </Link> */}
        <ul className="navbar-nav">
          {navItems.map((item) => {
            if (item.title) {
              return (
                <li
                  key={item.id}
                  className="nav-item"//{item.cName}
                  onClick={() => setDropdown(!dropdown)}
                >
                <a href="#" className="icon-button"> {<CaretIcon />} </a>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;