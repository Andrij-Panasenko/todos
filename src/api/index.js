import axios from 'axios';
import { getAllTodos } from './getAllTodos';
import { deleteTodo } from './deleteTodo';
import { createTodo } from './createTodo';

axios.defaults.baseURL = 'https://todos-webserver.onrender.com';

export { getAllTodos, deleteTodo, createTodo };
