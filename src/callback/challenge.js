import { XMLHttpRequest } from 'xmlhttprequest';
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xHttp = new XMLHttpRequest();
  xHttp.open('GET', url_api, true);
  xHttp.onreadystatechange = function (event) {
    if (xHttp.readyState === 4) {
      if (xHttp.status === 200) {
        callback(null, JSON.parse(xHttp.responseText));
      } else {
        const error = new Error('Error' + url_api);
        return callback(error, null);
      }
    }
  }
  xHttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.log(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.log(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.log(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
})