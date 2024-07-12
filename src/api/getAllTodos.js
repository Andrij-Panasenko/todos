import axios from 'axios';

export const getAllTodos = async () => {
  try {
    const response = await axios.get('/');

    return response.data;
  } catch (error) {
    console.error('Error getting todos', eddod);
    throw error;
  }
};
