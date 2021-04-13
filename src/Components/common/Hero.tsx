import React from "react";
import styled from "styled-components";
import { device } from "./MediaQueries";

interface HeroProps {
  title?: string;
  secondTitle?: string;
  image: string;
  desc?: string;
  secondDesc?: string;
}

export const Hero: React.FC<HeroProps> = (Props) => {
  return (
    <HeroContainer image={Props.image}>
      <h1>{Props.title}</h1>
      {Props.secondTitle ? <h3>{Props.secondTitle}</h3> : null}
      {Props.desc ? <p>{Props.desc}</p> : null}
      {Props.secondDesc ? <p>{Props.secondDesc}</p> : null}
    </HeroContainer>
  );
};

const HeroContainer = styled.div<HeroProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.primaryColor};
  text-align: center;
  padding: 0 10px;

  h1 {
    font-size: 30px;
    font-weight: lighter;
  }
  h3 {
    font-size: 20px;
    font-weight: lighter;
    margin: 10px 0;
  }
  p {
    margin: 10px 0;
    font-size: 14px;
  }

  @media ${device.tablet} {
    min-height: 800px;

    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
  @media ${device.laptop} {
    h1 {
      font-size: 90px;
    }
    h3 {
      font-size: 50px;
    }
  }
`;
