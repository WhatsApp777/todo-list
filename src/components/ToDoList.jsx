import React from "react";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoList({ todos, list, deleteTodo, toggleTodo }) {
  return (
    <section className="todos__list">
      {!todos.length === 0 && <h2 className="list__empty">{list}</h2>}
      {todos.map((todo) => (
        <ToDo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </section>
  );
}

export default ToDoList;
