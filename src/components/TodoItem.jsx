import React from "react";

const TodoItem = ({ todoName, todoPhone, todoImg }) => {
  return (
    <div>
      <img src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h4>{todoPhone}</h4>
    </div>
  );
};

export default TodoItem;
