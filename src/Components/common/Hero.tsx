import React from "react";

interface HeroProps {
  title?: string;
  desc?: string;
  image: string;
}

export const Hero: React.FC<HeroProps> = ({ title, desc, image }) => {
  return (
    <div className="">
      <img src={image} alt="bg_bkground" />
      <h1>{title}</h1>
      {desc ? <p>{desc}</p> : null}
    </div>
  );
};
