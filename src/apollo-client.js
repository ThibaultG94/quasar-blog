import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

const KEYSTONE_API_URL = import.meta.env.VITE_KEYSTONE_API_URL;

// Remplace l'URL par celle de ton serveur Keystone
const httpLink = new HttpLink({
  uri:
    KEYSTONE_API_URL ||
    "https://keystone-back.admin.serv.thiserv.com/api/graphql",
  credentials: "include",
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default apolloClient;
