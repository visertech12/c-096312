import {URLS} from '../config';

export async function getStatistics() {
  const response = await fetch(URLS.GET_STATISTICS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.statistics;
}
