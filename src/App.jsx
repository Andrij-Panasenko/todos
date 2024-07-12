import { useEffect, useState } from 'react';
import { AddTodoFrom } from './AddTodoForm';
import { TodoItem } from './TodoItem';
import { getAllTodos } from './api';
import { deleteTodo } from './api/deleteTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodoFrom onAdd={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onDelete={() => handleDeleteTodo(todo._id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
