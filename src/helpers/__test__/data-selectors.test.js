import { groupStargazersByDate } from '../data-selectors';

describe('data-selectors', () => {
  describe('groupStargazersByDate', () => {
    it('converts a single stargazer', () => {
      const stargazers = [
        { starredAt: '2016-02-25T15:00:00Z' },
      ];

      const actualOutput = groupStargazersByDate(stargazers);
      const expectedOutput = [
        { dateString: '2016-02-25', stars: 1 },
      ];

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('converts two stargazers on the same date', () => {
      const stargazers = [
        { starredAt: '2016-02-25T14:00:00Z' },
        { starredAt: '2016-02-25T15:00:00Z' },
      ];

      const actualOutput = groupStargazersByDate(stargazers);
      const expectedOutput = [
        { dateString: '2016-02-25', stars: 2 },
      ];

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('converts two stargazers on sequential dates', () => {
      const stargazers = [
        { starredAt: '2016-02-25T14:00:00Z' },
        { starredAt: '2016-02-26T10:00:00Z' },
      ];

      const actualOutput = groupStargazersByDate(stargazers);
      const expectedOutput = [
        { dateString: '2016-02-25', stars: 1 },
        { dateString: '2016-02-26', stars: 1 },
      ];

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('converts two stargazers with a gap between dates dates', () => {
      const stargazers = [
        { starredAt: '2016-02-25T14:00:00Z' },
        { starredAt: '2016-02-28T10:00:00Z' },
      ];

      const actualOutput = groupStargazersByDate(stargazers);
      const expectedOutput = [
        { dateString: '2016-02-25', stars: 1 },
        { dateString: '2016-02-26', stars: 0 },
        { dateString: '2016-02-27', stars: 0 },
        { dateString: '2016-02-28', stars: 1 },
      ];

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('handles real-world data', () => {
      const stargazers = [
        { starredAt: '2016-02-25T14:00:00Z' },
        { starredAt: '2016-02-25T15:00:00Z' },
        { starredAt: '2016-02-28T10:00:00Z' },
        { starredAt: '2016-03-02T14:00:00Z' },
        { starredAt: '2016-03-02T15:00:00Z' },
        { starredAt: '2016-03-02T16:00:00Z' },
      ];

      const actualOutput = groupStargazersByDate(stargazers);
      const expectedOutput = [
        { dateString: '2016-02-25', stars: 2 },
        { dateString: '2016-02-26', stars: 0 },
        { dateString: '2016-02-27', stars: 0 },
        { dateString: '2016-02-28', stars: 1 },
        { dateString: '2016-02-29', stars: 0 }, // 2016 is a leap year
        { dateString: '2016-03-01', stars: 0 },
        { dateString: '2016-03-02', stars: 3 },
      ];

      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});
