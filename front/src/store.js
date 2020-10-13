import got from 'got';

export default {
  state: {
    token: null
  },
  mutations: {
    SET_USER_DATA (state, token) {
      state.token = token;
      localStorage.setItem('user', token);
      got.defaults.options.headers.set('Authorization',
        `Bearer: ${token}`)
    }
  },
  actions: {
    register({ commit }, credentials) {
      return got.post('http://localhost:8000/register', credentials).then(
        ({ data }) => {
          console.log('user data is:', data);
          commit('SET_USER_DATA', data)
        }
      )
    }
  },
};
