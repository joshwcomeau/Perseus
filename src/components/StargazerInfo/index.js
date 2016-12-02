// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { VictoryBar, VictoryChart } from 'victory';

import {
  selectStargazers,
  groupStargazersByWeek
} from '../../helpers/data-selectors';
import { css } from '../../helpers/global-aphrodite';

import styles from './styles';

const fetchStargazersQuery = gql`
  query fetchStargazers($username: String!, $reponame: String!, $after: String) {
    repository(name: $reponame, owner: $username) {
      stargazers(first: 30, after: $after) {
        edges {
          starredAt
          node {
            id
            name
            bio
            company
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

let page = 0;

const StargazerInfo = (props) => {
  const { username, reponame, loading, repository, loadMoreStargazers } = props;

  if (loading) {
    return <div>LOADING!</div>;
  }

  const stargazers = selectStargazers(repository);
  const { hasNextPage } = repository.stargazers.pageInfo;

  if (hasNextPage) {
    // Wait a second, and then request the next page.
    window.setTimeout(loadMoreStargazers, 2000);
  }

  const stargazersByDate = groupStargazersByWeek(stargazers);
  console.log("DATA", stargazersByDate)

  return (
    <div className={css(styles.stargazerInfo)}>
      <VictoryChart
        domainPadding={{ x: 20 }}
        animate={{ duration: 500 }}
      >
        <VictoryBar
          data={stargazersByDate}
          x="dateString"
          y="stars"
        />
      </VictoryChart>
    </div>
  );
};

StargazerInfo.propTypes = {

};

StargazerInfo.defaultProps = {
  after: '',
};

export default graphql(fetchStargazersQuery, {
  props({ data }) {
    return {
      ...data,
      loadMoreStargazers: () => {
        const { variables, fetchMore, repository } = data;

        return data.fetchMore({
          query: fetchStargazersQuery,
          variables: {
            ...variables,
            after: repository.stargazers.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            // Merge the results together
            return {
              repository: {
                stargazers: {
                  edges: [
                    ...previousResult.repository.stargazers.edges,
                    ...fetchMoreResult.data.repository.stargazers.edges
                  ],
                  pageInfo: fetchMoreResult.data.repository.stargazers.pageInfo,
                }
              }
            }
          }
        })
      }
    }
  }
})(StargazerInfo);
