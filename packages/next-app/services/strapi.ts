import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

const API_BASE_URL = 'http://localhost:1337'

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${API_BASE_URL}/graphql`,
    }),
  });