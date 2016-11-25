import padStart from 'lodash/padStart';

const padStartCurried = (length, chars) => string => padStart(string, length, chars);
const datePad = padStartCurried(2, '0');

export const getDateString = date => (
  `${date.getUTCFullYear()}-${datePad(date.getUTCMonth() + 1)}-${datePad(date.getUTCDate())}`
);

export const addDays = num => date => {
  // Make a working copy so we don't mutate the supplied date.
  const d = new Date(date);

  d.setDate(d.getDate() + num);

  return d;
}
