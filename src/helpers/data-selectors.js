// Set of helper functions to pluck and format data out of graphql responses
import { compose } from 'redux';
import last from 'lodash/last';
import { getDateString, addDays } from './date-manipulation';


const add1Day = addDays(1);
const formattedAdd1Day = compose(getDateString, add1Day);

// Get an array of stargazers from the response
export const selectStargazers = repository => (
  repository.stargazers.edges.map(edge => ({
    starredAt: edge.starredAt,
    ...edge.node,
  }))
);

export const groupStargazersByDate = stargazers => (
  stargazers.reduce((acc, stargazer) => {
    const date = new Date(stargazer.starredAt);
    const dateString = getDateString(date);
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
    let cursor = previousEntry ? previousEntry.dateString : dateString;
    while (cursor < dateString) {
      cursor = formattedAdd1Day(cursor);

      acc.push({ dateString: cursor, stars: 0 });
    }


    last(acc).stars += 1;

    return acc;
  }, [])
)
