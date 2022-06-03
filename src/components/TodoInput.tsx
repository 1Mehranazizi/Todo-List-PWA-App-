import React from 'react';
import styles from "./TodoInput.module.css";

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const TodoInput:React.FC<Props> = ({todo,setTodo}) => {
    return (
        <form className={styles.todoInput}>
            <input type="text" placeholder='Your Todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className={styles.btn__todo_input}>Add Todo</button>
        </form>
    );
};

export default TodoInput;