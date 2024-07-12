import axios from "axios";
import { getAllTodos } from "./getAllTodos";

axios.defaults.baseURL = 'http://localhost:1234'

export {getAllTodos}