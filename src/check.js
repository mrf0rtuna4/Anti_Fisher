
var key = 'api-key.txt'

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-apikey': key,
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({url: 'http://heypers-lab.ml/ '})
  };
  
  fetch('https://www.virustotal.com/api/v3/urls', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => console.log(data))
    .catch(err => console.error(err));

//const options = {method: 'GET', headers: {accept: 'application/json', 'x-apikey': '/api-key.txt'}};

//fetch('https://www.virustotal.com/api/v3/urls/https%3A%2F%2Fheypers-lab.ml', options)
 // .then(response => response.json())
 // .then(response => console.log(response))
 // .catch(err => console.error(err));