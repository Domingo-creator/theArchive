import React from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">SHOP</li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">DISCOVER</li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">SECONDHAND</li>
          </ul>
        </div>
        <Link to="/">
          <div>
            <img
              src="https://i.imgur.com/rxlJC7G.png"
              height="30px"
              className="Levi's img"
            />
          </div>
        </Link>

        <div>
          <img src="https://i.imgur.com/yM8VTqT.png" height="20px" />
        </div>

        <div>
          <img src="https://i.imgur.com/lQw4fSR.png" height="20px" />
        </div>

        <div>
          <img
            src="https://i.imgur.com/Px0k0VF.png"
            height="20px"
            // style=padding:"5px"
          />
        </div>
      </div>
    </nav>
  );
};
