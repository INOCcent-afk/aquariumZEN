import React from "react";
import styled from "styled-components";
import FbIcon from "../../assets/images/fb-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <img src={FbIcon} alt="fb-logo" />
      <h1>Aquarium Zen</h1>
      <p>
        920 NE 64TH ST <br /> SEATTLE, <br /> WA 206.499.1372
      </p>
      <p>AQUARIUMZEN@GMAIL.COM</p>
      <p>COPYRIGHT © 2020 AQUARIUM ZEN</p>

      <ScrollTop href="#top">TOP</ScrollTop>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 80px 10px;
  position: relative;
  background: #f5f5f5;

  img {
    width: 60px;
    margin: 40px 0;
  }

  h1 {
    font-weight: lighter;
    font-size: 35px;
    margin: 10px 0;
  }

  p {
    color: ${(props) => props.theme.foreFontColor};
    letter-spacing: 3px;
    margin: 10px 0;
    font-size: 14px;
  }
`;

const ScrollTop = styled(AnchorLink)`
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30px;
  border-radius: 50%;
  background: #ecebeb;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;
