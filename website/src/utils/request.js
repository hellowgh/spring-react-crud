import axios from 'axios';

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

export async function get (url) {
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function post (url) {
  try {
    const res = await axios.post(url);
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

