// QueryString -> Object
export function queryToObject(query) {
  return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

// Object -> QueryString
export function objectToQuery(object) {
  if(typeof object !== 'object') return;
  let query = '';

  for(var key in object) {
    if(typeof object[key] !== 'undefined') {
      query = query === '' ? key + '=' + object[key] : query + '&' + key + '=' + object[key];
    }
  }
  return query;
}

// Swap array elements
export function swapArray(arr, from, to) {
  arr.splice(to,0,arr.splice(from,1)[0]);
  return arr;
}