import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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

  const values = {
    addTodo,
    getTodos,
    todos,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
