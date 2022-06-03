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
        <span className={styles.todo_btn}>
          <img src={CheckIcon} alt="checked" />
        </span>
        <span className={styles.todo_btn}>
          <img src={TrashIcon} alt="trash" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
