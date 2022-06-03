import React from "react";
import { todoModel } from "../model/model";
import styles from "./TodoItem.module.css";

//Icons
import TrashIcon from "../icon/trash.svg";
import CheckIcon from "../icon/check.svg";

interface Props {
  todo: todoModel;
  todos: todoModel[];
  setTodos: React.Dispatch<React.SetStateAction<todoModel[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const deletHandler = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <li
      className={
        todo.isDone
          ? `${styles.todo_item} ${styles.todo_done}`
          : styles.todo_item
      }
    >
      <p>{todo.todo}</p>
      <div>
        <span className={styles.todo_btn} onClick={() => doneHandler(todo.id)}>
          <img src={CheckIcon} alt="checked" />
        </span>
        <span className={styles.todo_btn} onClick={() => deletHandler(todo.id)}>
          <img src={TrashIcon} alt="trash" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
