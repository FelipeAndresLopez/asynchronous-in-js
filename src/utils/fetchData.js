import { XMLHttpRequest } from 'xmlhttprequest';

export const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {

    let xHttp = new XMLHttpRequest();
    xHttp.open('GET', url_api, true);
    xHttp.onreadystatechange = () => {
      if (xHttp.readyState === 4) {
        xHttp.status === 200
          ? resolve(JSON.parse(xHttp.responseText))
          : reject(new Error('Error', url_api));
      }
    }
    xHttp.send();
  });
}