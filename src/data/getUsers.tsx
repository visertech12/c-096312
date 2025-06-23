import {URLS} from '../config';

export async function getUsers() {
  const response = await fetch(URLS.GET_USERS);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const json = await response.json();
  return json.users;
}
