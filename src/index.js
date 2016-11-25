import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Match } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store';
import client from './helpers/graphql-client';

import App from './components/App';
import Header from './components/Header';
import Home from './components/Home';
import StargazerInfo from './components/StargazerInfo';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

render(
  <ApolloProvider store={store} client={client}>
    <Router>
      <App>
        <Match exactly pattern="/" component={Home} />

        <Match
          pattern="/examine/:username/:reponame"
          render={({ params }) => (
            <div>
              <Header {...params} />

              <StargazerInfo {...params} />
            </div>
          )}
        />
      </App>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
