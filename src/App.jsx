import { useState } from "react";
import { AddTodoFrom } from "./AddTodoForm";
import { TodoItem } from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);


    const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }


  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodoFrom onAdd={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}
