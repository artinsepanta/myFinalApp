import fetch from 'isomorphic-fetch'
 require('es6-promise').polyfill()

export default function api(method, path, data){
  return fetch(`//localhost:3001/ ${path}`, {
method : method.toUpperCase(),
mode : 'cors',
headers:new Headers ({
'Accept':'aplication/json',
'Content-Type':'application/json',
'Access-control-Allow-Origin':window.location.origin,
}),
body:JSON.stringify(data)
  }).then(response =>response.json())
}
