import { atom } from "recoil";

export const blogChoiceState = atom({
  key: "blogChoiceState",
  default: "神戸太郎の健やかブログ",
});

export const blogIdState = atom({
  key: "blogIdState",
  default: "/admin/blogs/1",
});
export const blogIdArticleEditState = atom<any>({
  key: "blogIdArticleEditState",
  default: {},
});

