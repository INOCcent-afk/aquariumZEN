import React from "react";
import { Description } from "../Components/common/Description";
import { Hero } from "../Components/common/Hero";

const About: React.FC = () => {
  return (
    <>
      <Hero
        height="900px"
        title="OUR COMMITMENT TO NATURE"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1422511107442-D3IXP7JJQID5G0FFAF9F/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Aquarium+Zen+DSC03597.jpg?format=1500w"
      />
      <Description
        firstDesc="A novel way of expressing that love for nature is through an artfully designed aquascape.  Everything is connected in nature and we see our aquascaping business as an opportunity to affect people positively and to make the world a better place, even in a small way.  If even a small portion of our clients leave Aquarium Zen with a better appreciation for the interrelationships of plants, fish, aquatic ecosystems and the stewardship of nature, we will have done our job."
        secondDesc="As part of our commitment to nature, we choose small, grassroots conservation organizations to support both monetarily and with our volunteered time.  Our current focus is tropical montane cloud forest conservation."
        thirdDesc="The cloud forest environments are magical places filled with moss-covered trees, exotic birds, rare amphibians,  exuberant vegetation and cascading mountain streams – great inspiration for our aquarium designs.  Through our efforts, we have helped a cloud forest reserve in Ecuador gain important publicity and raised funds for significant land purchases."
      >
        <p>
          Aquarium Zen is inspired by nature and hopes to share with our
          customers an appreciation for the wonders of life on earth.
        </p>
      </Description>
      <Hero
        height="600px"
        title="BRINGING NATURE AQUARIUMS TO SEATTLE"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1448380441829-XWQM2M3DI2ENVCMXQC4T/ke17ZwdGBToddI8pDm48kG2XqrpC0Q2eY2w1ulL2kn97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWefJsCm1ASz5GMhdCptjRPfWE2UXNeo_aFIHWtLU4RyK76i4Pnf4gjsqffMFtWRmg/orange-head-fish-1800.jpg?format=1500w"
      />
      <Description
        firstDesc="Aquarium Zen is the result of decades of focused aquarium experience, passion, and dedication to the art of the Nature Aquarium.  Our goal is to inspire every person who walks into Aquarium Zen."
        secondDesc="We realize our customers and community are the most important factor in our business' success.  To keep high quality customer service standards, every customer interaction is handled by Aquarium Zen's owner and sole operator, Steve Waldron."
        thirdDesc="Aquarium Zen is the product of Steve's vision to bring an aquarium shop focused on the Nature Aquarium style to Seattle.  Steve has over 30 years of aquarium experience and has worked as a professional aquarist for nearly twenty years, including the management of aquaculture systems for university fish research laboratories as well as the retail and wholesale tropical fish trade.  Steve has achieved the Master Fish Breeder and Master Aquatic Horticulturist status for the Greater Seattle Aquarium Society and is a contributing writer for the premiere English-language freshwater aquarium magazine, AMAZONAS.  If you are looking for professional aquarium advice and experienced mentorship, Steve is looking forward to becoming your aquarium buddy."
        fourthDesc="We are endlessly grateful for this opportunity to celebrate our love for naturalistic aquariums with the wonderful community of Seattle and all of the Pacific Northwest."
      >
        <p>Maintenance</p>
        <img
          className="description-showcaseImage"
          src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423773552323-OKFRV8VJOSJ88BSDCTRZ/ke17ZwdGBToddI8pDm48kB998TxYMBa2dmapu_ct3GFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzl45PXF_w5qoSddkrxATMYJpmy37ma4A1KQnE0nNgk29sRwOyewKYfWjS56iin-10/Aquarium-Zen-Seattle-Fish-Store-Aquarium-Maintenance?format=750w"
          alt="showcase"
        />
      </Description>
      <Hero
        height="600px"
        title="WHAT PEOPLE ARE SAYING"
        image="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1423773086272-F7Q5TG7OFADJAF2GP37J/ke17ZwdGBToddI8pDm48kJoTiCRFgGmNd8hAGZmnRAJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYaFUi4rqgnCEaJHC8o504sXa6n89FoVzMlPtUhdJbNWGAJKG50QNK5JN_CGaBRFDw/angelfish-green-wall-edit.jpg?format=1500w"
      />
    </>
  );
};

export default About;
