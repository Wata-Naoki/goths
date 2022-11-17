import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import "./index.css";
import App from "./App";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      //.env.localのREACT_APP_URLを読み込む
      uri: process.env.REACT_APP_URL,
      credentials: "same-origin", //URL が呼び出し元のスクリプトと同一オリジンだった場合のみ、ユーザーの資格情報 (HTTP Basic 認証、など) を送信
    }),
    cache: new InMemoryCache(),
  });
};

// msw(mockのデータ)を扱うための処理
// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./mocks/browser");
//   worker.start();
// }

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
const client = initializeApollo();
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
