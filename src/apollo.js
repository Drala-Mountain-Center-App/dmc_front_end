import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://drala-mountain-api-4812ef039e59.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client