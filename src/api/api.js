const got = require('got');
export function fetchData(url) {
  return got(url, { json: true });
}
