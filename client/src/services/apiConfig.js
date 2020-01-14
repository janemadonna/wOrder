import Axios from 'axios';

export const JwtToken = () => localStorage.getItem('token') || null;
export const TOKEN_KEY = '697169b7aee55c713bb0fd95ee7a41de';

let apiUrl

const apiUrls = {
  production: 'https://worder.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = Axios.create({
  baseURL: apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    err => Promise.reject(err)
  )

export default api