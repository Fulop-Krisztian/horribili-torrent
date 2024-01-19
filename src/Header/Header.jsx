import React, { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import Navitems from "./Navitems.jsx";
import LoadingBar from "./LoadingBar/LoadingBar.jsx";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu.jsx";
import MenuButton from "../Menu/MenuButton.jsx";

function Header() {
  const [menuState, setMenuState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState);
    console.log('Menu toggled, current state:', { menuState });
  };

  return (
    <header className="header">
      <section className="navbar">
        <nav className="nav">
          <MenuButton toggleMenu={toggleMenu} />
          <Link to="/" className="logo">
            <img src="/Horribili_corp.png" alt="Horribili-logo" draggable="false" height="40" />
          </Link>
          <Searchbar />
          <Navitems />
        </nav>
        <LoadingBar />
      </section>
      <Menu menuState={menuState} />
    </header>
  );
}

export default Header;
