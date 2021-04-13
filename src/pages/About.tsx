import React from "react";
import styled from "styled-components";
import { Button, TomatoButton } from "../Components/common/Button";

const About: React.FC = () => {
  return (
    <Section>
      <Title>HELLO ABOUT</Title>
      <Button>POTA</Button>
      <TomatoButton>POTA</TomatoButton>
    </Section>
  );
};

export default About;

const Title = styled.h1`
  color: red;
  font-size: 10rem;
`;

const Section = styled.section`
  padding: 2rem;
  margin: 2rem;
`;
