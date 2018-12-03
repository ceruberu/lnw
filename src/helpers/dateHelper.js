import { formatDistance } from 'date-fns';

export function dateInDistance(date) {
  return formatDistance(
    new Date(parseInt(date)),
    new Date(),
    { addSuffix: true }
  );
}