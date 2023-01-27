import { atom, DefaultValue } from "recoil";
import { localStorageEffect } from "../localStorageEffect.ts/localStorageEffect";
type User = {
  email: string;
  name?: string;
};

export const localStorageUserState = atom<User | DefaultValue>({
  key: "userStateKey",
  default: { email: "", name: "" },
  effects_UNSTABLE: [localStorageEffect("localStorage_key")],
});
