import fetch from 'isomorphic-fetch';

// Must check response status since "fetch" does not reject promise for HTTP 4xx or 5xx server responses.
const checkResponseStatus = (response, potentialErrorStatus) => {
  if (response.status >= potentialErrorStatus) {
    // Read response stream to receive error message from API
    return response.text()
      .then(message => {
        throw new Error(message);
      });
  };

  // no error
  return response;
};

const parseJSON = (response) => response.json();

export const bittrex = () => (
  fetch('/bittrex', {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  })
    .then(response => checkResponseStatus(response, 400))
    .then(parseJSON)
);
