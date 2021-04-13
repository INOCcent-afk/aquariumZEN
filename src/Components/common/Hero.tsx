import React from "react";
import styled from "styled-components";

interface HeroProps {
  title: string;
  image: string;
  desc?: string;
  secondDesc?: string;
}

export const Hero: React.FC<HeroProps> = (Props) => {
  return (
    <HeroContainer>
      <img src={Props.image} alt="bg_bkground" />
      <h1>{Props.title}</h1>
      {Props.desc ? <p>{Props.desc}</p> : null}
      {Props.secondDesc ? <p>{Props.secondDesc}</p> : null}
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  min-height: 800px;
`;
