import React from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ButtonActions from "./ButtonActions";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]); // массив списка задач
  const [text, setText] = React.useState(""); //строка которую вводят в Сабмит
  const todoCompleted = todos.filter((todo) => todo.isCompleted).length;

  const one = "задача";
  const twoThreeFour = "задачи";
  const otherNumber = "задачь";

  function todoCompletedTitle(todoCompleted) {
    if (todoCompleted === 1) {
      return `Выполнена - ${todoCompleted} задача`;
    } else if (todoCompleted <= 4) {
      return `Выполнено - ${todoCompleted} задачи`;
    } else if (todoCompleted >= 5) {
      return `Выполнено - ${todoCompleted} задачь`;
    }
  }

  function resetTodoHandler() {
    setTodos([]);
  }

  function deleteCompletedTodo() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  }

  function changeInputValue(event) {
    setText(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodoHandler(text);
    setText("");
  }

  return (
    <div className="App">
      <h1 className="App__title">Для заметок</h1>
      <ToDoForm
        buttonTitle="Сохранить"
        onSubmit={onSubmitHandler}
        onChange={changeInputValue}
        value={text}
      />
      {!!todos.length && (
        <ButtonActions
          refresh={resetTodoHandler}
          deleteCompleted={deleteCompletedTodo}
          todoCompleted={!!todoCompleted}
        />
      )}
      <ToDoList
        todos={todos}
        list="Список дел пустой"
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {todoCompleted > 0 && (
        <h2 className="has-completed">{todoCompletedTitle(todoCompleted)}</h2>
      )}
    </div>
  );
}

export default App;
