import React from "react";
import "./styles.css";
import NavButton from "../NavButton/NavButton.jsx";

const Navbar = () => {
  return (
    <div className="navbar fixed">
      <NavButton href="/" text="Home" />
      <NavButton href="/about" text="About" />
      <NavButton href="/help" text="Help" />
    </div>
  );
};

export default Navbar;
