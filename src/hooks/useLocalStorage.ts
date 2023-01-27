import { DefaultValue, useRecoilState, useRecoilValue } from "recoil";
import { localStorageUserState } from "../atom/atom";

export const useLocalStorage = () => {
  const [userValue, setUserValue] = useRecoilState(localStorageUserState);
  const removeValue = () => {
    setUserValue(new DefaultValue());
  };
  return { userValue, setUserValue, removeValue };
};
