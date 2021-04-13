import React from "react";
import styled from "styled-components";

interface DescriptionProps {
  firstDesc?: string;
  secondDesc?: string;
  thirdDesc?: string;
  fourthDesc?: string;
  logoIcon?: string;
}

export const Description: React.FC<DescriptionProps> = (Props) => {
  return (
    <DescriptionContainer>
      <DescriptionTitle>{Props.children}</DescriptionTitle>
      <DescriptionContent>
        {Props.firstDesc ? <p>{Props.firstDesc}</p> : null}
        {Props.secondDesc ? <p>{Props.secondDesc}</p> : null}
        {Props.thirdDesc ? <p>{Props.thirdDesc}</p> : null}
        {Props.fourthDesc ? <p>{Props.fourthDesc}</p> : null}
      </DescriptionContent>
      {Props.logoIcon ? (
        <img className="desc_icon_logo" src={Props.logoIcon} alt="" />
      ) : null}
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  max-width: 650px;
  margin: 100px auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .desc_icon_logo {
    width: 80px;
    margin: auto;
  }
`;

const DescriptionContent = styled.div`
  p {
    color: ${(props) => props.theme.foreFontColor};
    font-weight: bold;
    margin: 30px 0;
    font-size: 16px;
    line-height: 26px;

    a {
      color: "#6598b8";
    }
  }
`;

const DescriptionTitle = styled.div`
  text-align: center;
  p {
    font-size: 30px;
    margin: 30px 0;
  }
  .description-showcaseImage {
    width: 100%;
  }
  .descript-title-v2 {
    max-width: 400px;
    margin: 30px auto;
    padding: 30px 0;
    border-top: 1px solid ${(props) => props.theme.secondaryFontColor};
    border-bottom: 1px solid ${(props) => props.theme.secondaryFontColor};

    p {
      font-size: 20px;
      margin: 15px 0;
    }
  }
`;
