import { atom } from "recoil";

export const appState = atom({
  key: "appState",
  default: {},
});

export const activeMenuState = atom({
  key: "activeMenu",
  default: "/",
});
