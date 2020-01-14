import api from './apiConfig';

export const signUp = async credentials => {
    try {
        const resp = await api.post('/users/register', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        throw error
    }
}

export const logInUser = async credentials => {
  try {
    const resp = await api.post('/users/login', credentials);
    localStorage.setItem('token', resp.data.token);
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const logOut = async user => {
  try {
    await localStorage.clear();
    return true;
  } catch (error) {
    throw error
  }
}

export const getUserForUpdate = async user => {
  try {
    const resp = await api.get(`/users/${user}`);
    return resp.data;
  } catch (error) {
    throw error
  }
}

export const updateUser = async (id, credentials) => {
  try {
    const resp = await api.put(`/users/${id}`, credentials);
    return resp.data
  } catch (error) {
    throw error
  }
}