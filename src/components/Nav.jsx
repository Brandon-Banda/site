import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { navItems } from "./Navitems";
import Dropdown from "./Dropdown";
import CaretIcon from "../icons/caret.svg?react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to="/" className="navbar-logo">
            <img src="https://avatars.githubusercontent.com/u/61038766?v=4" />
          </Link>
          {navItems.map((item) => {
            if (item.title) {
              return (
                <li
                  key={item.id}
                  className="nav-item" //{item.cName}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <a href="#" className="icon-button">
                    {" "}
                    {<CaretIcon />}{" "}
                  </a>
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
