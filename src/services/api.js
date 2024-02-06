import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
}

export const requestContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const requestAddContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export const requestRegisterUser = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export const requestLoginUser = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export const requestLogoutUser = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
}

export const requestRefreshUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
}