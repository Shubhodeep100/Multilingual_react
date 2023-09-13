import "./Styles.css";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
        <h3 className="text">
          Home
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
      </nav>
    </>
  );
};

export default Header;
