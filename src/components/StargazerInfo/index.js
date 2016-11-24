// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { css } from '../../helpers/global-aphrodite';

import styles from './styles';

const fetchStargazers = gql`
  query fetchStargazers($username: String!, $repo: String!) {
    repository(name: $repo, owner: $username) {
      stargazers(first: 30) {
        edges {
          node {
            name
            bio
            company
          }
        }
      }
    }
  }
`;


const StargazerInfo = ({ username, repo, data }) => {
  console.log("GOT", data)
  return (
    <div className={css(styles.stargazerInfo)}>
      Searching for {username}, {repo}
    </div>
  );
};

StargazerInfo.propTypes = {

};

StargazerInfo.defaultProps = {

};

export default graphql(fetchStargazers)(StargazerInfo);
