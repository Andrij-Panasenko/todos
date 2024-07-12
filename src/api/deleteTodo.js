import axios from "axios"

export const deleteTodo = async (id) => {
  // console.log("🚀 ~ deleteTodo ~ id:", id)
  try {
    const response = await axios.delete(`/${id}`)

    return response.data
    
  } catch (error) {
    console.error('Error deleting todo', error);
    throw error;
  }
}