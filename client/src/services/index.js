import api from './apiConfig'

export const getWords = async () => {
    try {
      const resp = await api.get('/words')
      return resp.data
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