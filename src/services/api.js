import 'isomorphic-fetch';

const API_ROOT = 'http://localhost:1337';

function callApi(endpoint, request) {
  const fullUrl = API_ROOT + endpoint;

  if (request && request.body) {
    request.body = JSON.stringify(request.body);
  }

  return fetch(fullUrl, {
    ...request,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json()
        .then(body => ({ response, body }));
    })
    .then(({ response, body }) => {
      if (!response.ok) {
        return Promise.reject(body);
      }

      return {
        lastUpdated: Date.now(),
        body,
      };
    });
}

export default callApi;
