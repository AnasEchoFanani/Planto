// Plants
import plant1 from "./plants/plant1.png";
import plant2 from "./plants/plant2.png";
import plant3 from "./plants/plant3.png";
import plant4 from "./plants/plant4.png";
import plant5 from "./plants/plant5.png";
import plant6 from "./plants/plant6.png";
import plantHero from "./plants/plant-hero.png";
import background from "./backround/backround.png";

// Logo
import logo from "./logo/logo.svg";

// Avatars
import avatar1 from "./avatars/avatar1.png";
import avatar2 from "./avatars/avatar2.png";
import avatar3 from "./avatars/avatar3.png";

export const images = {
  plants: {
    plant1,
    plant2,
    plant3,
    plant4,
    plant5,
    plant6,
    plantHero,
  },
  avatars: {
    avatar1,
    avatar2,
    avatar3,
  },
  background,
  logo,
} as const;

export default images;
