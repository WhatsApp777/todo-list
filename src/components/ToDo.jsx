import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import React from "react";
import styles from "./Todo.module.css";

function ToDo(props) {
  const { todo, deleteTodo, toggleTodo } = props;

  const className = `${styles.todo} ${
    todo.IsCompleted ? styles.listcompleted : ""
  }`;

  return (
    <section
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <h4 className={styles.todoText}>{todo.text}</h4>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </section>
  );
}

export default ToDo;
