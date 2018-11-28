import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";

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
  credentials: 'include'
});

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
    httpLink
  ])
});
