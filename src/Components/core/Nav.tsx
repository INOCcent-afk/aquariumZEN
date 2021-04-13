import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../common/MediaQueries";

interface NavProps {
  toggleDropdown: () => void;
}

export const Nav: React.FC<NavProps> = ({ toggleDropdown }) => {
  return (
    <Header id="top">
      <Logo>
        <Link to="/">AQUARIUM ZEN</Link>
      </Logo>
      <NavLinks>
        <li>
          <NavLink exact to="/" activeClassName="activeLink">
            AQUARIUM ZEN
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="activeLink" to="/products">
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="activeLink" to="/services">
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="activeLink" to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="activeLink" to="/hourslocation">
            HOURS & LOCATION/COVID INFO
          </NavLink>
        </li>
      </NavLinks>
      <Hamburger onClick={toggleDropdown}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 5%;
`;

const Logo = styled.div`
  a {
    font-size: 16px;
    letter-spacing: 2px;
  }
`;

const NavLinks = styled.ul`
  display: none;
  align-items: center;
  list-style: none;

  li {
    margin-left: 15px;

    a {
      font-size: 12px;
      letter-spacing: 3px;
      color: ${(props) => props.theme.secondaryFontColor};

      &:hover {
        color: ${(props) => props.theme.primaryFontColor};
      }
    }
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 16px;

  span {
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.secondaryColor};
  }

  @media ${device.laptop} {
    display: none;
  }
`;
