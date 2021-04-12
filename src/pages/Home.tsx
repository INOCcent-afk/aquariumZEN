import React from "react";
import { Hero } from "../Components/common/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Hero
        title="AQUARIUM ZEN"
        image={
          "https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419045665589-MB9WYUX3F2VFFNRL6TI6/ke17ZwdGBToddI8pDm48kOSH0Qv3JqQ-58UD5but0fJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzI2blxBZuYRJHWW9q1yLUW25bHP9ii6rlTlOcql1qSZ090BJj_RP3GwgktMOiJmYQ/Aquarium-Zen-Seattle?format=300w"
        }
        desc="Tropical Fish Store, Aquatic Plants & Nature Aquarium Supplies"
        secondDesc="Seattle's source for aquascaping inspiration."
      />
    </div>
  );
};

export default Home;
