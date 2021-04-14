import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../common/MediaQueries";

const Dropdown: React.FC = () => {
  return (
    <DropdownContainer>
      <li>
        <NavLink exact to="/" activeClassName="mobileActiveLink">
          AQUARIUM ZEN
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/products" activeClassName="mobileActiveLink">
          PRODUCT
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/services" activeClassName="mobileActiveLink">
          SERVICES
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about" activeClassName="mobileActiveLink">
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/hourslocation" activeClassName="mobileActiveLink">
          HOURS & LOCATION
        </NavLink>
      </li>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  background: #333;
  padding: 20px;
  list-style: none;
  li {
    margin: 10px 0;
  }
  li a {
    color: #fff;
  }

  @media ${device.laptop} {
    display: none;
  }
`;
