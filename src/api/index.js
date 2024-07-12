import axios from 'axios';
import { getAllTodos } from './getAllTodos';
import { deleteTodo } from './deleteTodo';
import { createTodo } from './createTodo';

axios.defaults.baseURL = 'http://localhost:1234';

export { getAllTodos, deleteTodo, createTodo };
