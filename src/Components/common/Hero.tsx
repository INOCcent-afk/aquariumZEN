import React from "react";

interface HeroProps {
  title: string;
  image: string;
  desc?: string;
  secondDesc?: string;
}

export const Hero: React.FC<HeroProps> = (Props) => {
  return (
    <div className="bg-teal.500">
      <img src={Props.image} alt="bg_bkground" />
      <h1>{Props.title}</h1>
      {Props.desc ? <p>{Props.desc}</p> : null}
      {Props.secondDesc ? <p>{Props.secondDesc}</p> : null}
    </div>
  );
};
