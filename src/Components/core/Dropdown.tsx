import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../common/MediaQueries";

const Dropdown: React.FC = () => {
  return (
    <DropdownContainer>
      <li>
        <Link to="/">AQUARIUM ZEN</Link>
      </li>
      <li>
        <Link to="/products">PRODUCT</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/about">ABOUT US</Link>
      </li>
      <li>
        <Link to="/hourslocation">HOURS & LOCATION</Link>
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
