import { useEffect, useState } from 'react';
import { AddTodoFrom } from './AddTodoForm';
import { TodoItem } from './TodoItem';
import { getAllTodos, deleteTodo, createTodo } from './api';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getAllTodos();
    setTodos(data);
  };

  const addTodo = async (newTodo) => {
    const value = { text: newTodo };
    try {
      await createTodo({ text: newTodo });
      await fetchTodos();
    } catch (error) {
      console.error('Error creating todo', error);
    }
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
