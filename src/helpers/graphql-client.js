import ApolloClient, { createNetworkInterface } from 'apollo-client';

// NOTE: This token is not meant to be embedded in client-side code.
// I'm too lazy to set up a proxy server, though.
// This token is associated with an empty account with no repositories, though,
// so the worst that can happen is that someone creates a bunch of repos, or
// invalidates the token. ¯\_(ツ)_/¯
// It's defined in config/secrets.js, and injected using definePlugin on build.
// eslint-disable-next-line no-undef
const TOKEN = process.env.GITHUB_OAUTH_TOKEN;

const URI = 'https://api.github.com/graphql';


const networkInterface = createNetworkInterface({ uri: URI });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    // Send the login token in the Authorization header
    req.options.headers.authorization = `Bearer ${TOKEN}`;
    next();
  }
}]);


const client = new ApolloClient({
  networkInterface,
});

export default client;
