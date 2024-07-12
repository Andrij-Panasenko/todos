import axios from "axios";

export const createTodo = async (newTodo) => {
  try {
    const response = await axios.post('/', newTodo);
    return response.data
  } catch (error) {
    console.error(
      'Something went wrong during creating todo. Try again later',
      error
    );
    throw error;
  }
};
