// helpers

// get token form local storage and compose headers
const headers = () => {
  return {'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: localStorage.getItem('token') };
};

const signup_headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const URL_ROOT = 'http://localhost:3001';
const API_ROOT = `${URL_ROOT}/api/v1`;

// cryptos

const getCryptos = () => {
  return fetch(`${API_ROOT}/cryptos`, {
    headers: headers()
  }).then(res => res.json());
};

// tickers

const getTickers = () => {
  return fetch(`${API_ROOT}/tickers`, {
    headers: headers()
  }).then(res => res.json());
};

const deleteTicker = (id) => {
  return fetch(`${API_ROOT}/tickers/${id}`, {
    method: 'DELETE',
    headers: headers()
  }).then(res => res.json());
};

const addTicker = (crypto_id) => {
  return fetch(`${API_ROOT}/tickers`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ crypto_id })
  }).then(res => res.json());
};

// auth

const login = (username, password) => {
  return fetch(`${URL_ROOT}/login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const logout = () => {
  return fetch(`${URL_ROOT}/logout`, {
    method: 'POST',
    headers: headers()
  }).then(res => res.json());
};

const signup = (signupBody) => {
  return fetch(`${URL_ROOT}/signup`, {
    method: 'POST',
    headers: signup_headers,
    body: JSON.stringify({user: signupBody})
  }).then(res => res.json());
};

const getLoggedInUser = () => {
  return fetch(`${URL_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json());
};

export default {
  cryptos: {
    getCryptos
  },
  tickers: {
    getTickers,
    addTicker,
    deleteTicker
  },
  auth: {
    login,
    logout,
    getLoggedInUser,
    signup
  }
};
