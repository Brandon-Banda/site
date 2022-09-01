import React, {useState, useEffect, useRef} from "react";
import "./styles.scss";
import Images from "./Images";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Water from "./pages/Water";
import Counters from "./pages/Counters";
import Upload from "./pages/Upload";
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

function App() {
  return (
    <Router>
      <Navbar>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    <Switch>
    <Route path='/water' component={Water} />
    <Route path='/' exact component={Home} />
    <Route path='/counters' component={Counters} />
    <Route path='/upload' component={Upload} />
  </Switch>
    </Router>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  function toggle(){
    setOpen(!open);
  }
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={toggle}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight + 30)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  // props.goToMenu && setActiveMenu(props.goToMenu)
  // this is for nested menus

  //TODO ADD ONCLICK TO CLOSE MENU HERE

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        <Link to='/'>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}>
            Home
          </DropdownItem>

        </Link>
        <Link to='/counters'>
        <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}>
            Counters
        </DropdownItem>

        </Link>
        <Link to='/water'>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}>
            Water
          </DropdownItem>

        </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

function Home() {
  return (
    <div className='container'>
      {Images.map(({ img, idx, title, desc, link, type }) => (
        <div className='imgContainer'>
          <h4> {title} </h4>
          <img key={idx} src={img} alt='image' />
          <p> {desc} </p>
          <a href={link} class='button' target='_blank' rel='noreferrer'>
            Check price
          </a>
        </div>
      ))}
    </div>
  );
}
export default App;
