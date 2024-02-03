// MenuButton.jsx
import React from "react";

function MenuButton({ toggleMenu }) {
  return (
    <img
      src="/menu-2925825_1280.png"
      className="menu-button"
      onClick={toggleMenu}
    ></img>
  );
}

export default MenuButton;
