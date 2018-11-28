import { formatDistance } from 'date-fns';
import th from 'date-fns/locale/th';

export function dateInDistance(date) {
  return formatDistance(
    new Date(parseInt(date)),
    new Date(),
    { addSuffix: true, locale: th }
  );
}