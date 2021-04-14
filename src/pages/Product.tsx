import React from "react";
import { Description } from "../Components/common/Description";
import { Hero } from "../Components/common/Hero";

const Product: React.FC = () => {
  return (
    <>
      <Hero
        height="900px"
        title="NATURE AQUARIUM SUPPLIES"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420566563461-FL8QBVH5CPXF1HJUQUES/ke17ZwdGBToddI8pDm48kGSqyZoCBbM-ifQexofNQUl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeiF5NjyEn9m62pAl4P-bCnFPO-_k9B3_25m_TRd4aaR-8LiSGIkAQq7PEFbHcEyfg/box-rocks-red.jpg?format=2500w"
      />
      <Description
        firstDesc="We only sell what we know works and works well for creating artistic
        aquariums. Though we strive for high quality, we do our best to make
        our products affordable and available to our customers. We also stock
        quality tropical fish and plants, many of which we have bred or
        cultivated ourselves."
        secondDesc="We carry ADA (Aqua Design Amano) products, Mr. Aqua rimless aquariums, AZOO products, Seachem, Eheim filters and many other unique and quality aquascaping materials such as rare wood and stone imported from Asia.  We also carry nutritious prepared and frozen foods.  "
      >
        <p>Redefining the tropical fish store experience.</p>
        <img
          className="description-showcaseImage"
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420578614672-UXBZUAPO1HEXG2GT05RV/ke17ZwdGBToddI8pDm48kGIOuFVbUVnl6SB5kvY3TB57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uc5EccvCqUbW1hbO4RarX2JyM_DGL7aKBhx2X7nr4IGIcpu-Zk6lKH88UbVvLWepNQ/ADA-product-boxes.jpg?format=1500w"
          alt="showcase"
        />
      </Description>
      <Hero
        height="600px"
        title="TROPICAL FISH"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420577924998-QBJO4F1TYCIRX0DCSBHJ/ke17ZwdGBToddI8pDm48kDIiOaYYfMkfi9p7VksBt1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URDzjigjvBw8dioocOX6C_h_sDXiQ8KjdebignKa_GoeRY5byGCXiM996O21yNVyKA/penguin-tetra-school.jpg?format=2500w"
      />
      <Description
        firstDesc="Our interest is in small, peaceful species that will grace the aquarium with gentle, colorful energy.  Most of the fish in our store have been selected so that they can be freely combined in planted community aquariums.  The owner of Aquarium Zen, Steve Waldron, has over 30 years of aquarium experience and can tell you everything you need to know about the fish of your interest."
        secondDesc="We source many of our fish from local sources and even breed some of our own such as rare varieties of livebearers and dwarf shrimp.  We can also special order just about any type of freshwater fish and have the connections to track down rare species."
      >
        <p>
          Aquarium Zen's selection of tropical fish is varied and unique,
          focused on species that do well in freshwater planted aquariums.
        </p>
      </Description>
      <Hero
        height="600px"
        title="AQUATIC PLANTS"
        image=" https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1421557066223-4FBNFCFQMKIVN9WOMKUK/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_5490.JPG?format=2500w"
      />
      <Description
        firstDesc="Aquarium plants are diverse and beautiful in their own right and we see our Nature Aquariums as a style of underwater gardening.  There are aquatic plants for every type of aquarium and we specialize in helping our customers discover the right plant for their aquarium conditions and experience level."
        secondDesc="Every aquarium benefits from the addition of living plants and your fish will feel more at ease, healthy and contented in a planted aquarium.  Even if you don't have a green thumb, we can find the right plant for you and your aquarium."
        thirdDesc="Aquarium Zen carries a wide selection of nursery grown plants and also a diverse collection of rarities that we cultivate in the store."
      >
        <p>
          Aquatic plants provide the structure and biological support to keep
          our aquarium ecosystems thriving.
        </p>
      </Description>
    </>
  );
};

export default Product;
