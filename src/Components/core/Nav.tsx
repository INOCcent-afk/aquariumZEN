import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">AQUARIUM ZEN</Link>
      </div>
      <ul className="">
        <li>
          <Link to="/">AQUARIUM ZEN</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/hourslocation">HOURS & LOCATION/COVID INFO</Link>
        </li>
      </ul>
    </header>
  );
};
