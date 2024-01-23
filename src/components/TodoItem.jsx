import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const TodoItem = ({ todoName, todoPhone, todoImg, id }) => {
  const { deleteTodo } = useContext(productContext);
  return (
    <div className="container">
      <img src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h4>{todoPhone}</h4>
      <Button onClick={() => deleteTodo(id)} variant="contained">
        Delete
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained">Edit</Button>
      </Link>
      <Link to={`/details/${id}`}>
        <Button variant="contained">Details</Button>
      </Link>
    </div>
  );
};

export default TodoItem;
