import React from "react";
import { Hero } from "../Components/common/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="AQUARIUM ZEN"
        image={
          "https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420309152156-8I8POGHO6EUI6E0QX7MP/ke17ZwdGBToddI8pDm48kPYblK9-IzvIHFuAcaL53bd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5fa7ZltxeU5VyP_Sg36JjUsnPHetW-LvkkfGt_L2oZB4g/angelfish-slide-cropped.jpg?format=2500w"
        }
        secondTitle="SEATTLE, WA"
        desc="Tropical Fish Store, Aquatic Plants & Nature Aquarium Supplies"
        secondDesc="Seattle's source for aquascaping inspiration."
      />
      <Hero
        title="WHAT IS A NATURE AQUARIUM?"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419643749782-0E1Y19USZ1KW7D4GSASJ/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_3365.JPG?format=2500w"
      />
    </>
  );
};

export default Home;
