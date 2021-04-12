import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">AQUARIUM ZEN</Link>
      </div>
    </header>
  );
};
