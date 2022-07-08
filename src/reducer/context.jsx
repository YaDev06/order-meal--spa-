import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ContextFunc = createContext();

const initialState = {
  meal: [],
  category: [],
  detail: "",
};

export const MealContext = ({ children }) => {
  let [value, dispatch] = useReducer(reducer, initialState);

  value.getAllMeal2 = (data) => {
    dispatch({ type: "GET_ALL_MEAL", payload: data });
  };

  value.setCategory = (data) => {
    dispatch({ type: "SET_CATEGORY", payload: data });
  }

  return <ContextFunc.Provider value={value}>{children}</ContextFunc.Provider>;
};
