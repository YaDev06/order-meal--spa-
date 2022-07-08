import React from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ALL_MEAL":
      return {
        ...state,
        meal: payload,
      };
    case "SET_CATEGORY":
        return {
            ...state,
            category: payload,
        };  


    default:  return state;
  }
};

export default reducer;
