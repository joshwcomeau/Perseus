// Set of helper functions to pluck and format data out of graphql responses
import { compose } from 'redux';
import moment from 'moment';
import last from 'lodash/last';


const dateLabelFormat = 'MMM Do, YYYY';

// Get an array of stargazers from the response
export const selectStargazers = repository => (
  repository.stargazers.edges.map(edge => ({
    starredAt: edge.starredAt,
    ...edge.node,
  }))
);

export const groupStargazersByWeek = stargazers => (
  stargazers.reduce((acc, stargazer) => {
    const startOfWeek = moment(stargazer.starredAt).startOf('week');
    const dateString = startOfWeek.format(dateLabelFormat);
    const previousEntry = last(acc);

    // If this is the first run, create our first entry
    if (!previousEntry) {
      return [{ dateString, stars: 1 }];
    }

    // Our data is irregular.
    // The previous entry might have been the same day, or it might have been
    // 2 months ago. We need to be sure to fill in any date gaps, as well as
    // not erase previous entries created on the same date.
    //
    // Start by checking if previous entry was the same date.
    if (previousEntry.dateString === dateString) {
      previousEntry.stars += 1;
      return acc;
    }

    // If there is a gap, we need to fill it in.
    let m = moment;
    const previousDateString = previousEntry ? previousEntry.dateString : dateString;
    let cursor = moment(previousDateString, dateLabelFormat);
    let iterations = 0;

    while (cursor.isBefore(startOfWeek) && iterations < 30) {
      cursor.add(1, 'week');

      acc.push({ dateString: cursor.format(dateLabelFormat), stars: 0 });
      iterations += 1;
    }

    last(acc).stars += 1;

    return acc;
  }, [])
);
