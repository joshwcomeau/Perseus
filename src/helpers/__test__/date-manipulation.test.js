import { addDays, getDateString } from '../date-manipulation';

describe('date-manipulation', () => {
  describe('addDays', () => {
    it('adds a single day', () => {
      const d = new Date('2016-01-01');

      const actualOutput = getDateString(addDays(1)(d));
      const expectedOutput = '2016-01-02';

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('adds a single day to a UTC time string', () => {
      const d = new Date('2016-03-17T12:25:50Z');

      const actualOutput = getDateString(addDays(1)(d));
      const expectedOutput = '2016-03-18';

      expect(actualOutput).toEqual(expectedOutput);

    })
  });

  describe('getDateString', () => {
    it('converts a date to a date string', () => {
      const d = new Date('2010-11-12T13:14:15Z');

      const actualOutput = getDateString(d);
      const expectedOutput = '2010-11-12';

      expect(actualOutput).toEqual(expectedOutput);
    });

    it('handles padding of single digits', () => {
      const d = new Date('2010-01-02T03:14:15Z');

      const actualOutput = getDateString(d);
      const expectedOutput = '2010-01-02';

      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});
