// src/mocks/handlers.js
import { graphql } from "msw";

const mockArticle = [
  {
    id: "1",
    title: "タイトルああああああああああああああ",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    createAt: "3時間前",
    updateAt: "3時間前",
    articles: "article",
    users: "神戸太郎",
    blog: "神戸太郎の健やかブログ",
    tags: "tags",
  },
  {
    id: "2",
    title: "タイトル",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    createAt: "2022年2月22日 2時",
    updateAt: "2022年2月22日 2時",
    articles: "article",
    users: "taro yamada",
    blog: "タラオの今日も釣り日和",
    tags: "tags",
  },
];

const mockBlogs = [
  {
    id: "1",
    title: "ブログのタイトルあああああ",
    createAt: "3時間前",
    updateAt: "3時間前",
    articles: mockArticle,
    users: "神戸太郎",
    tags: "tags",
  },
  {
    id: "2",
    title: "神戸太郎の健やかブログ",
    createAt: "2022年2月22日 2時",
    updateAt: "2022年2月22日 2時",
    articles: "article [{id:'1'}, {id:'2'}]",
    users: "Taro Yamada",
    tags: "tags",
  },
];

const mockInt: any[] = [19, 15, 23, 2, 0, 0, 0, 0, 0, 0, 0, 0];

const mockArticleStats = [{ numberOfArticles: mockInt }];

const mockMyBlogs = [
  {
    id: "1",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
  {
    id: "2",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
  {
    id: "3",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
  {
    id: "4",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
  {
    id: "5",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
  {
    id: "6",
    title: "Myタイトル",
    user: "My神戸太郎",
  },
];

const mockAdminBlogs = [
  {
    id: "1",
    title: "タイトル",
    user: "神戸太郎",
  },
  {
    id: "2",
    title: "タイトル",
    user: "神戸太郎",
  },
  {
    id: "3",
    title: "タイトル",
    user: "神戸太郎",
  },
  {
    id: "4",
    title: "タイトル",
    user: "神戸太郎",
  },
  {
    id: "5",
    title: "タイトル",
    user: "神戸太郎",
  },
  {
    id: "6",
    title: "タイトル",
    user: "神戸太郎",
  },
];

const mockBlogChoice = [
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ2",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ3",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ4",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ5",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blogName: "神戸太郎の健やかブログ6",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blogName: "渡邉尚輝の健やかブログ",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blogName: "渡邉尚輝の健やかブログ2",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blogName: "渡邉尚輝の健やかブログ3",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blogName: "渡邉尚輝の健やかブログ4",
  },
];

let mockAdminBlogsArticles = [
  {
    //blogbyuserを使う。けど、のちのちだから、優先度は低めでおけ。
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ",
    id: "1", //idの1を使って1つ目の記事を表示させるようにする
    title: "タイトル",
    user: "神戸太郎",
    createAt: "3時間前",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ",
    id: "2",
    title: "タラオのタイトル",
    user: "タラオ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ2",
    id: "3",
    title: "タイトル",
    user: "マスオ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ2",
    id: "4",
    title: "タイトル",
    user: "アナゴ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ3",
    id: "5",
    title: "タイトル",
    user: "ワカメ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ3",
    id: "6",
    title: "タイトル",
    user: "タラオ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ4",
    id: "7",
    title: "タイトル",
    user: "イクラ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ4",
    id: "8",
    title: "タイトル",
    user: "タラオ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ5",
    id: "9",
    title: "タイトル",
    user: "サザエ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    blog: "神戸太郎の健やかブログ6",
    id: "10",
    title: "タイトル",
    user: "ナミヘイ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blog: "渡邉尚輝の健やかブログ",
    id: "11",
    title: "2の1タイトル",
    user: "ナミヘイ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blog: "渡邉尚輝の健やかブログ2",
    id: "12",
    title: "2の2タイトル",
    user: "ナミヘイ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blog: "渡邉尚輝の健やかブログ3",
    id: "13",
    title: "2の3タイトル",
    user: "ナミヘイ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    blog: "渡邉尚輝の健やかブログ4",
    id: "14",
    title: "2の4タイトル",
    user: "ナミヘイ",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
];

const mockFavoriteArticles = [
  {
    title: "タイトル",
    users: "神戸太郎",
    createAt: "3時間前",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    title: "タイトル",
    users: "神戸太郎",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
];

const mockSearch = [
  {
    title: "日本",
    users: "神戸太郎",
    createAt: "3時間前",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
  {
    title: "アメリカ",
    users: "神戸太郎",
    createAt: "2022年2月22日 2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
  },
];

const mockBlogsIdArticles = [
  {
    id: "1",
    articleId: "1",
    blog: "神戸太郎の健やかブログ",
    title: "ブログ内の記事タイトル1",
    user: "神戸太郎",
    createdAt: "3時間雨",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    tags: "80",
  },
  {
    id: "1",
    articleId: "2",
    blog: "神戸太郎の健やかブログ",
    title: "ブログ内の記事タイトル2",
    user: "神戸太郎",
    createdAt: "2022年2月22日2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    tags: "40",
  },
  {
    id: "2",
    articleId: "3",
    blog: "神戸太郎の健やかブログ",
    title: "ブログ内の記事タイトル11",
    user: "神戸太郎",
    createdAt: "3時間雨",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    tags: "80",
  },
  {
    id: "2",
    articleId: "4",
    blog: "神戸太郎の健やかブログ",
    title: "ブログ内の記事タイトル22",
    user: "神戸太郎",
    createdAt: "2022年2月22日2時",
    text: "本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本...",
    tags: "40",
  },
];

let mockTableUsers = [
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "1",
    name: "神戸太郎",
    email: "jane.cooper@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "2",
    name: "山田太郎",
    email: "cody.fisher@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "3",
    name: "山田太郎",
    email: "esther.howard@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "4",
    name: "山田太郎",
    email: "jenny.wilson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "5",
    name: "山田太郎",
    email: "kristin.watson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "1",
    },
    id: "6",
    name: "山田太郎",
    email: "cameron.williamson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    id: "7",
    name: "山田太郎",
    email: "cameron.williamson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    id: "8",
    name: "山田太郎",
    email: "cameron.williamson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    id: "9",
    name: "山田太郎",
    email: "cameron.williamson@example.com",
    delete: "削除",
  },
  {
    mockMyBlogs: {
      id: "2",
    },
    id: "10",
    name: "山田太郎",
    email: "cameron.williamson@example.com",
    delete: "削除",
  },
];

export const handlers = [
  graphql.mutation("createPost", (req, res, ctx) => {
    const { id, title, text, createAt, updateAt, articles, users, blog, tags } =
      req.variables;

    return res(
      ctx.data({
        input: {
          id: id,
          title: title,
          text: text,
          createAt: createAt,
          updateAt: updateAt,
          articles: articles,
          users: users,
          blog: blog,
          tags: tags,
        },
      })
    );
  }),

  graphql.mutation("UserSetting", (req, res, ctx) => {
    const { username, email, gitToken } = req.variables;
    return res(
      ctx.data({
        input: {
          user: username,
          email: email,
          gitToken: gitToken,
        },
      })
    );
  }),
  graphql.mutation("UserAdd", (req, res, ctx) => {
    const { email } = req.variables;
    return res(
      ctx.data({
        input: {
          email: email,
        },
      })
    );
  }),
  graphql.mutation("CreateArticle", (req, res, ctx) => {
    const { title, content } = req.variables;
    return res(
      ctx.data({
        input: {
          title: title,
          content: content,
        },
      })
    );
  }),

  graphql.mutation("EditArticle", (req, res, ctx) => {
    const { title, text } = req.variables;
    return res(
      ctx.data({
        input: {
          title: title,
          text: text,
        },
      })
    );
  }),

  graphql.mutation("DeleteArticle", (req, res, ctx) => {
    const { id } = req.variables;
    mockAdminBlogsArticles = mockAdminBlogsArticles.filter(
      (article) => article.id !== id
    );
    return res(
      ctx.data({
        delete: {
          mockAdminBlogsArticles: {
            id: id,
          },
        },
      })
    );
  }),

  graphql.mutation("DeleteBlog", (req, res, ctx) => {
    const { blog } = req.variables;
    mockAdminBlogsArticles = mockAdminBlogsArticles.filter(
      (x) => x.blog !== blog
    );
    return res(
      ctx.data({
        delete: {
          mockAdminBlogsArticles: {
            blog: blog,
          },
        },
      })
    );
  }),
  graphql.mutation("DeleteEditor", (req, res, ctx) => {
    const { id } = req.variables;
    mockTableUsers = mockTableUsers.filter((x) => x.id !== id);
    return res(
      ctx.data({
        delete: {
          mockTableUsers: {
            id: id,
          },
        },
      })
    );
  }),

  graphql.query("posts", (req, res, ctx) => {
    return res(
      ctx.data({
        posts: {
          data: mockArticle,
        },
      })
    );
  }),

  graphql.query("blogs", (req, res, ctx) => {
    const {first, page} = req.variables;
    return res(
      ctx.data({
        blogs: {
          data: mockBlogs,
        },
      })
    );
  }),

  graphql.query("articlesByBlog", (req, res, ctx) => {
    const { blogId } = req.variables;

    const mockArticlesByBlogsId = mockBlogsIdArticles.filter(
      (x) => x.id === blogId
    );

    return res(
      ctx.data({
        articlesByBlog: {
          data: mockArticlesByBlogsId,
        },
      })
    );
  }),

  graphql.query("article", (req, res, ctx) => {
    return res(
      ctx.data({
        article: {
          data: mockBlogsIdArticles,
        },
      })
    );
  }),

  graphql.query("favoriteArticles", (req, res, ctx) => {
    return res(
      ctx.data({
        favoriteArticles: {
          data: mockFavoriteArticles,
        },
      })
    );
  }),

  graphql.query("search", (req, res, ctx) => {
    return res(
      ctx.data({
        search: {
          data: mockSearch,
        },
      })
    );
  }),

  graphql.query("articleFavoritesCount", (req, res, ctx) => {
    return res(
      ctx.data({
        articleFavoritesCount: {
          data: mockArticleStats,
        },
      })
    );
  }),

  graphql.query("myBlogsByUser", (req, res, ctx) => {
    return res(
      ctx.data({
        myBlogsByUser: {
          data: mockMyBlogs,
        },
      })
    );
  }),

  graphql.query("blogsByUser", (req, res, ctx) => {
    return res(
      ctx.data({
        blogsByUser: {
          data: mockAdminBlogs,
        },
      })
    );
  }),

  graphql.query("adminArticlesByBlog", (req, res, ctx) => {
    return res(
      ctx.data({
        adminArticlesByBlog: {
          data: mockAdminBlogsArticles,
        },
      })
    );
  }),


  graphql.query("blogChoice", (req, res, ctx) => {
    return res(
      ctx.data({
        blogChoice: {
          data: mockBlogChoice,
        },
      })
    );
  }),

  graphql.query("adminArticle", (req, res, ctx) => {
    return res(
      ctx.data({
        adminArticle: {
          data: mockAdminBlogsArticles,
        },
      })
    );
  }),

  graphql.query("adminTableUsers", (req, res, ctx) => {
    return res(
      ctx.data({
        adminTableUsers: {
          data: mockTableUsers, 
        },
      })
    );
  }),
];
