import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://astralpaints.kwebmakerdigitalagency.com/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
