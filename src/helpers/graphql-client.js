import ApolloClient, { createNetworkInterface } from 'apollo-client';

const URI = 'https://api.github.com/graphql';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: URI }),
});

export default client;
