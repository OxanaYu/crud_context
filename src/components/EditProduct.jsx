import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const EditProduct = () => {
  const { editTodo, getOneProduct, oneTodo } = useContext(productContext);
  const [name, setName] = useState(oneTodo.todoName);
  const [phone, setPhone] = useState(oneTodo.todoPhone);
  const [img, setImg] = useState(oneTodo.todoImg);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneTodo) {
      setName(oneTodo.todoName);
      setPhone(oneTodo.todoPhone);
      setImg(oneTodo.todoImg);
    }
  }, [oneTodo]);
  const handleClick = () => {
    if (!name || !phone || !img) {
      return;
    }
    let newTodo = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    editTodo(newTodo, id);
    navigate("/");
  };

  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />

      <TextField
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="outlined-basic"
        label="phone"
        variant="outlined"
      />
      <TextField
        value={img}
        onChange={(e) => setPhone(e.target.value)}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <Button onClick={handleClick} variant="contained">
        Save
      </Button>
    </div>
  );
};

export default EditProduct;
