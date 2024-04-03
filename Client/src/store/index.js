import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#8a2be2",
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: "/brush.png",
  fullDecal: "/brush.png",
});

export default state;
