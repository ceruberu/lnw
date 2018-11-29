import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { withClientState } from "apollo-link-state";
import { getMainDefinition } from "apollo-utilities";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {
    // isLoggedIn: !!localStorage.getItem("token")
  },
  resolvers: {
    // Mutation: {
    // }
  }
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include"
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/graphql",
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export default new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    stateLink,
    splitLink
  ])
});
