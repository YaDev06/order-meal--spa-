import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextFunc } from "../reducer/context";
import Loader from "./Loader/Loader";

const MealList = () => {
  const { meal } = useContext(ContextFunc);
  return (
    <>
      {meal.length ? (
        meal.map((item) => (
          <div
            className="card text-center my-3"
            style={{
              width: "19rem",
              height: "30rem",
              borderRadius: "2rem 2rem 1.5rem 1.5rem",
              boxShadow: ".5rem .5rem 0rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.strCategoryThumb}
              className="card-img-top image-fluid p-5"
              alt={item.strCategory}
            />
            <div className="card-body">
              <h5 className="card-title">{item.strCategory}</h5>
              <p className="card-text">
                {item.strCategoryDescription.slice(0, 150)}...
              </p>
            </div>
            <div className="card-footer">
              <Link
                className="btn btn-success"
                to={`/category/${item.strCategory}`}
              >
                Category
              </Link>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MealList;
