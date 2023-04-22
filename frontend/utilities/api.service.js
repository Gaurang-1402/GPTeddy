import { CSRF_TOKEN } from './csrf_token.js'
// import {LocalStorage, SessionStorage} from 'quasar'
// import {axios} from './axios.min.js'
import axios from 'axios';

function handleResponse (response) {
  if (response.status === 204) {
    return response
  } else if (response.status === 404) {
    return response
  } else if (response.status === 400) {
    return response
  } else if (response.status === 500) {
    return response
  } else {
    return response.data
  }
}

function apiService (endpoint, method, data) {
  // D.R.Y. code to make HTTP requests to the REST API backend using fetch
  // const store = this.$store.state.token
  // console.log('inside api service token is' + store)
  // var axios = require('axios')
  console.log("Authorization token is " + window.localStorage.getItem("token")  )
  if(method == "GET"){
    console.log("here")
    console.log(data)
    var config = {
    method: method,
    url: endpoint,
    headers: {
      Authorization: window.localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
    params: data
   }

  }
  else{
    var config = {
    method: method || 'GET',
    url: endpoint,
    headers: {
      Authorization: window.localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
    data: data
  }

  }
  return axios(config)
    .then(response => handleResponse(response))

}

export { apiService }