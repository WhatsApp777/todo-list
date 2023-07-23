import React from "react";
import "./ToDoForm.css";

function ToDoForm(props) {
  const { buttonTitle, onSubmit, onChange, value } = props;

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        minLength="2"
        required
        className="form__input"
        placeholder="текст заметки"
        value={value}
        onChange={onChange}
      />
      <button className="form__submit" typy="submit">
        {buttonTitle}
      </button>
    </form>
  );
}

export default ToDoForm;
