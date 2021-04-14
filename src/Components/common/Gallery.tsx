import React from "react";
import styled from "styled-components";
import { device } from "./MediaQueries";

export const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043217647-BXMEVS1F1BR40UY95VGW/ke17ZwdGBToddI8pDm48kHl2SjwwLkOuTRhdRIPw7IpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH2AbkJqR52bic6ds2X8hNeqRxs_P-DZ5C8zLiDD7NxKZxSzKqlTopgPqvX_cDbJlY/Aquiarm-Zen-Seattle-Fish-Store-Angelfish?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043272884-WYGHVVLZR2HM7DKBRLWR/ke17ZwdGBToddI8pDm48kJ7nbjKbkWUsh--ERnWUjn5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PINeE2IRzA94xOcAmQpZPYUTM_9gggOThSvOQ_2DDZFXwKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Nature-Aquarium-Display?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043383850-2419R5IZX2I5S4CTUIGL/ke17ZwdGBToddI8pDm48kMgvCgXQ_b1TtMvCmZXKZ5hZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIPnJwPpnZejQWSh11IqxMj-r3Vbzwt3xP5CBCP-cnV3wKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Hardscaping-Station?format=750w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043531253-J31O82CQDSZHV6NIH5S2/ke17ZwdGBToddI8pDm48kJEuAsZX4PcamHhInCJbwHYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc74QHSmRlNmuhCq7i7sO3mSflNBFFvH40yo6N6gZwidLhB4-vRrhmwCsq913C210x/Aquarium-Zen-Seattle-Fish-Store?format=1000w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420065832401-5K1QSRDRTPU172ZAC8XL/ke17ZwdGBToddI8pDm48kPTDrI75K_JHmK-5R7TXsFpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIq2SjQSovF_liZL4moeMeG9tPpaPq0JddAfP28r8TorQKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-more-angelfish?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420402903685-GKJ4MNNYR3V3LW6Z0K8C/ke17ZwdGBToddI8pDm48kPNENwq7xwNoRzgyvszqPiZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIyGju7SVAIAXatswaEz8XzYNOzmvRGYEOUEXjV1kg93UKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Panorama?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420065649621-H1GDF22G6CNC6OG9GCDD/ke17ZwdGBToddI8pDm48kNdyp7YeNQDUOFX0j47Vde1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw_PcYSI6HaF8JBMYc6PkoapGX17HVK1kWf36R0e5FgcHt0KF5Rvfpb-91cGwF9Bjk/Aquarium-Zen-Seattle-Fish-Store-Aquariums?format=750w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1420066901428-ZLLWYC0Q2O0VOV8YDDO6/ke17ZwdGBToddI8pDm48kPTDrI75K_JHmK-5R7TXsFpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIq2SjQSovF_liZL4moeMeG9tPpaPq0JddAfP28r8TorQKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Aquatic-Plants-Java-Fern?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043575460-NUKMSBYFUP9Y31FP6DFM/ke17ZwdGBToddI8pDm48kMgvCgXQ_b1TtMvCmZXKZ5hZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIPnJwPpnZejQWSh11IqxMj-r3Vbzwt3xP5CBCP-cnV3wKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Rainbowfish-Aru+II?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043669657-F4SB231SUPJYWN6ZB6CI/ke17ZwdGBToddI8pDm48kAyagj78-DWPswL_2JfsQgpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIoJKLN1Y3kmDizCQtfYuJENiq2Le3vcnMCOyb_JM5dT8KMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Tetras?format=300w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419043954743-XTJ5GCC1GGXJ08MBZFL6/ke17ZwdGBToddI8pDm48kBoRuu75SDzICIo4IWNQwmBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIycFlGJ4Pzuz37-ELKgOkSWORExpKee_IoZInJseHrssKMshLAGzx4R3EDFOm1kBS/Aquarium-Zen-Seattle-Fish-Store-Nature-Aquarium?format=300w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419044503411-N1Y16JH3FZOKPBRU2Q14/ke17ZwdGBToddI8pDm48kHl2SjwwLkOuTRhdRIPw7IpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH2AbkJqR52bic6ds2X8hNeqRxs_P-DZ5C8zLiDD7NxKZxSzKqlTopgPqvX_cDbJlY/Aquarium-Zen-Seattle-Fish-Store-Large-Display-Aquarium?format=500w"
        alt="image"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/5494a8f4e4b0f45669953a74/1419044528220-Z829F0MI2T6681YCQYAX/ke17ZwdGBToddI8pDm48kHl2SjwwLkOuTRhdRIPw7IpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH2AbkJqR52bic6ds2X8hNeqRxs_P-DZ5C8zLiDD7NxKZxSzKqlTopgPqvX_cDbJlY/Aquarium-Zen-Seattle-Fish-Store-ADA-Stone-Hardscaping?format=500w"
        alt="image"
      />
    </GalleryContainer>
  );
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
