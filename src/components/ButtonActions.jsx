import React from "react";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "./UI/UI.jsx";
import "./ButtonActions.css";

function ButtonActions(props) {
  const { refresh, deleteCompleted, todoCompleted } = props;
  return (
    <div className="ui">
      <Button onClick={refresh} title="удалить все задачи">
        <RiRefreshLine />
      </Button>
      {!!todoCompleted && (
        <Button onClick={deleteCompleted} title="Удалить выполненные задачи">
          <RiDeleteBin2Line />
        </Button>
      )}
    </div>
  );
}

export default ButtonActions;
