import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const { getOneProduct, oneTodo } = useContext(productContext);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      <img src={oneTodo.todoImg} alt="" />
      <h3>{oneTodo.todoName}</h3>
      <h4>{oneTodo.todoPhone}</h4>
    </div>
  );
};

export default TodoDetails;
