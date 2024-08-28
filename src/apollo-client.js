import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

// Remplace l'URL par celle de ton serveur Keystone
const httpLink = new HttpLink({
  uri:
    process.env.VITE_KEYSTONE_API_URL ||
    "https://keystone-back.admin.serv.thiserv.com/api/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
