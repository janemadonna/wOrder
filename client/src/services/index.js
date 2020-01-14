import api from './apiConfig'
import Axios from 'axios'

export const getWords = async () => {
    try {
      const resp = await api.get('/words')
      return resp.data
    } catch (error) {
      throw error
    }
  }

  const api2 = Axios.create({
    headers: {
        'x-rapidapi-key': '0c11bc845cmsh0c906192f839dc1p1f90f5jsnfe00b9042e64',
      'Access-Control-Allow-Origin': '*'
    }
  })

  export const getDefs = async (word) => {
      try {
          const resp = await api2.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`)
          return resp.data.results
      } catch (error) {
          throw error
      }
  }

export const getPoems = async () => {
    try {
        const resp = await api.get('/poems')
        return resp.data
    } catch (error) {
        throw error
    }
}