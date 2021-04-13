import React from "react";
import { Description } from "../Components/common/Description";
import { Hero } from "../Components/common/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Hero
        title="AQUARIUM ZEN"
        height="900px"
        image={
          "https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420309152156-8I8POGHO6EUI6E0QX7MP/ke17ZwdGBToddI8pDm48kPYblK9-IzvIHFuAcaL53bd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5fa7ZltxeU5VyP_Sg36JjUsnPHetW-LvkkfGt_L2oZB4g/angelfish-slide-cropped.jpg?format=2500w"
        }
        secondTitle="SEATTLE, WA"
        desc="Tropical Fish Store, Aquatic Plants & Nature Aquarium Supplies"
        secondDesc="Seattle's source for aquascaping inspiration."
      />

      <Description
        firstDesc="Aquarium Zen is a natural aquarium store filled with vibrant aquatic plants, a unique selection of healthy tropical fish, quality supplies and the inspiration to get you excited about keeping aquariums again."
        secondDesc={`
            Our focus is on the Natural Aquarium style of freshwater
            aquarium design. Nature Aquariums combine aquatic plants with
            artistically designed layouts of wood and stone to create a
            beautiful ecosystem in miniature. We take pride in giving our
            customers excellent customer service and have over 30 years of
            experience to draw from.`}
        thirdDesc="At its heart, Aquarium Zen is an independent, small business, tropical fish store and we can serve the basic needs of most freshwater aquarium owners, even if the Nature Aquarium is not your style.  Our goal is to mentor our clients in creating the aquarium of their dreams."
        fourthDesc="We invite you to visit our beautiful showroom and Nature Aquarium gallery, now open to the public.  Of course, you can also connect with us on Facebook:"
        logoIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaO7Z0x_BkwKfIaYSA2HRR-h6vA9rUOf_O6pn6czMu5WFj8gvh7W8fQNYk-0n7pV_bHY&usqp=CAU"
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419045665589-MB9WYUX3F2VFFNRL6TI6/ke17ZwdGBToddI8pDm48kOSH0Qv3JqQ-58UD5but0fJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzI2blxBZuYRJHWW9q1yLUW25bHP9ii6rlTlOcql1qSZ090BJj_RP3GwgktMOiJmYQ/Aquarium-Zen-Seattle?format=300w"
          alt="logo__"
        />
        <p>Seattle's source for aquascaping inspiration.</p>
      </Description>

      <Hero
        height="600px"
        title="WHAT IS A NATURE AQUARIUM?"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419643749782-0E1Y19USZ1KW7D4GSASJ/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_3365.JPG?format=2500w"
      />

      <Description
        firstDesc="The Nature Aquarium style originated in Japan and was pioneered by aquarist and landscape photographer, Takashi Amano.  Mr. Amano combined his many years of nature study and cultural background of refined Japanese aesthetics to create an aquarium design that resonates with natural energy and artistic expression.  A Nature Aquarium is an art form and a living ecosystem.  Nature Aquariums combine stylish aquarium equipment with layouts of wood, stone, living plants and fish to create an enchantment that is not soon forgotten."
        secondDesc="Aquarium Zen is one of the few tropical fish stores in the world focused on the Nature Aquarium style.  Our showroom in Seattle has all the supplies, equipment and knowledge necessary to help you create and maintain one of these living pieces of art in your own home or office."
      >
        <img
          className="description-showcaseImage"
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420068222099-KDBCYHQDCIAETIL6Y6XU/ke17ZwdGBToddI8pDm48kC8zMO5E2Et6S0YPGLOktj8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcbzTGCnY_TkE3DDOnjObY7doVh11T6YHM7kYvUle4_Izk7x_XXhn4PfrnSQb25IXh/Takashi-Amano-ADA?format=750w"
          alt="showcase"
        />
        <div className="descript-title-v2">
          <p>‎"If there is magic on this planet, it is contained in water."</p>
          <span>LOREN EISLEY</span>
        </div>
      </Description>

      <Hero
        height="600px"
        title="THE SHOP & SHOWROOM"
        image="https://raw.githubusercontent.com/INOCcent-afk/responsiveAQUARIUM-zen/master/images/DESIGN-window.jpg"
      />

      <Description
        firstDesc="When you enter Aquarium Zen, you will be greeted by a variety of display aquariums in our Nature Aquarium gallery to provide inspiration and examples for your own aquarium design.  As you make your way through the store, you will see clean aquariums filled with healthy freshwater fish and growing, living aquatic plants for sale.  We have a 'hardscape dojo' where you can work out your hardscape design of wood and stone in a relaxed and fun manner, before you purchase it.  We have a diverse and varied selection of rimless glass aquariums, the ideal vessel for artistic aquarium creations.  Our shelves are stocked with unique equipment and supplies selected for their durability and ability to provide the right conditions to keep your planted freshwater aquarium alive and healthy.  Aquarium Zen is an official retailer of Aqua Design Amano (ADA) products, the premier Japanese supplier of Nature Aquarium supplies.  If you appreciate aquariums, a trip to Aquarium Zen will be a memorable experience."
        secondDesc="Many of our customers have described Aquarium Zen as a tropical oasis filled with life in a space graced with natural light, old Seattle charm, warmth and beauty. "
      >
        <p>Redefining the tropical fish store experience.</p>
      </Description>

      <Hero
        height="600px"
        title="AQUARIUM ZEN"
        image="https://raw.githubusercontent.com/INOCcent-afk/responsiveAQUARIUM-zen/master/images/DESIGN-window.jpg"
      />
      <Hero
        height="600px"
        title="CREATE NATURE"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419643749782-0E1Y19USZ1KW7D4GSASJ/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_3365.JPG?format=2500w"
      />
    </>
  );
};

export default Home;
