import React from "react";
import { todoModel } from "../model/model";
import styles from "./TodoInput.module.css";

interface Props {
  todo: string;
  todos: todoModel[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}

const TodoInput: React.FC<Props> = ({ todo, setTodo, todos, setTodos }) => {
  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <form className={styles.todoInput} onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Your Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.btn__todo_input} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
