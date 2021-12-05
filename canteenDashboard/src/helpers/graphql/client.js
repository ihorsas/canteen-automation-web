/* eslint-disable linebreak-style */
import ApolloClient from 'apollo-client';

import { HttpLink } from 'apollo-link-http';

import { InMemoryCache } from 'apollo-cache-inmemory';

const httpsUri = `${process.env.REACT_APP_GRAPHQL_ENDPOINT}/v2/`;

const httpLink = new HttpLink({
  uri: httpsUri,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
