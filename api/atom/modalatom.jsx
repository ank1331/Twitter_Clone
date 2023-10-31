import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState_new', // unique ID (with respect to other atoms/selectors)
    default: true, // default value (aka initial value)
  });