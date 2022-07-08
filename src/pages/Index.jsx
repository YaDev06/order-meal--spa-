import React, { useContext, useEffect } from "react";
import { getAllMeal } from "../actions";
import MealList from "../Components/MealList";
import Loader from "../Components/Loader/Loader";
import { ContextFunc } from "../reducer/context";

const Index = () => {
  const {meal,getAllMeal2} = useContext(ContextFunc);
  useEffect(() => {
    getAllMeal().then((data) => getAllMeal2(data.categories));
  }, []);

  return (
    <>
      <div className="content container">
        {meal.length ? (<MealList />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Index;
