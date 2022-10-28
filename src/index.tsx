import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";

import App from "./App";
import { initializeApollo } from "./lib/apolloClient";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const apolloClients = initializeApollo();

render(
  <ApolloProvider client={apolloClients}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
