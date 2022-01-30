import "./App.css";
import React, { useState } from "react";

type FormEl = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  completed: boolean;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormEl) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Add Todo</button>
        </form>
        <section>
          {todos.map((todo: ITodo, index: number) => (
            <>
              <div
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                }}
                key={index}
              >
                {todo.text}
              </div>
              <button type="button" onClick={(): void => completeTodo(index)}>
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
              <button type="button" onClick={(): void => removeTodo(index)}>
                &times;
              </button>
            </>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
