import React, { useState, useEffect } from "react";

// Components
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

//Model
import { todoModel } from "./model/model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<todoModel[]>(() => {
    const saveItem = localStorage.getItem("todos");
    if (saveItem) {
      return JSON.parse(saveItem);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todos={todos}
      />
      <ul className="todo-container">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
