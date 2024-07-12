import { useEffect, useState } from 'react';
import { AddTodoFrom } from './AddTodoForm';
import { TodoItem } from './TodoItem';
import { getAllTodos } from './api';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos();
      console.log("🚀 ~ fetchTodos ~ data:", data)
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodoFrom onAdd={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}
