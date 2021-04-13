import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav: React.FC = () => {
  return (
    <Header>
      <Logo>
        <Link to="/">AQUARIUM ZEN</Link>
      </Logo>
      <NavLinks>
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
      </NavLinks>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px;
`;

const Logo = styled.div``;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    margin-left: 10px;
  }
`;
