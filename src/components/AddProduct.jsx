import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !img.trim()) {
      return;
    }
    let newObj = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    addTodo(newObj);
    setName("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div>
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={phone}
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        value={img}
        id="outlined-basic"
        label="Img"
        variant="outlined"
        onChange={(e) => setImg(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained">
        Add todo
      </Button>
    </div>
  );
};

export default AddProduct;
