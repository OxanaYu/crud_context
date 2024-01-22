import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos } = useContext(productContext);
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((elem) => (
        <TodoItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default TodoList;
