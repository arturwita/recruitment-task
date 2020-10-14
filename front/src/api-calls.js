import axios from 'axios';

export const logIn = credentials => new Promise ((resolve, reject) => {
  axios({url: 'http://localhost:8000/login', data: credentials, method: 'POST' })
    .then(response => {
      const token = response.data;
      localStorage.setItem('user-token', `Bearer: ${token}`);
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token');

      resolve(response)
    })
    .catch(err => {
      console.log(err);
      localStorage.removeItem('user-token');

      reject(err)
    })
});

export const register = credentials => new Promise ((resolve, reject) => {
  axios({url: 'http://localhost:8000/register', data: credentials, method: 'POST' })
    .then(() => {
      resolve('Registered successfully')
    })
    .catch(err => {
      console.log(err);
      reject('An error occurred')
    })
});

export const downloadTodos = () => new Promise ((resolve, reject) => {
  axios({url: 'http://localhost:8000/todos/download', method: 'POST' })
    .then(() => {
      resolve('Downloaded successfully')
    })
    .catch(err => {
      console.log(err);
      reject('An error occurred')
    })
});


export const getTodos = () => new Promise ((resolve, reject) => {
  axios({url: 'http://localhost:8000/todos', method: 'GET' })
    .then(response => {
      resolve(response.data)
    })
    .catch(err => {
      console.log(err);
      reject('An error occurred')
    })
});
