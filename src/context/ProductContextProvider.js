import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [oneTodo, setOneTodo] = useState("");

  // ! create
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };

  //! read
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  // ! Delete
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };

  // ! Edit
  const editTodo = async (newTodo, id) => {
    await axios.patch(`${API}/${id}`, newTodo);
  };
  // ! getOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneTodo(data);
  };

  const values = {
    addTodo,
    getTodos,
    deleteTodo,
    editTodo,
    getOneProduct,
    todos,
    oneTodo,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
