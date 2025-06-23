import {URLS} from '../config';

export async function getTransactions() {
  const response = await fetch(URLS.GET_TRANSACTIONS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.transactions;
}
