import CustomButton from "./customButton";
import React from "react";

function Todo({ todo, deleteListHandler, completeListHandler }) {
  return (
    <div className="square-style">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div className="todo-body">{todo.body}</div>
      </div>
      <div className="button-set">
        <CustomButton color="brown" onClick={() => deleteListHandler(todo.id)}>
          삭제
        </CustomButton>
        <CustomButton
          color="rgb(93, 39, 0)"
          onClick={() => completeListHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </CustomButton>
      </div>
    </div>
  );
}
export default Todo;
