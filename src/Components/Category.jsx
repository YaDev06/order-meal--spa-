import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getByCategory } from "../actions";
import Loader from "./Loader/Loader";

import { Link } from "react-router-dom";
import { ContextFunc } from "../reducer/context";

const Category = () => {
  const {category, setCategory} = useContext(ContextFunc);
  let { name } = useParams();

  useEffect(() => {
    getByCategory(name).then((data) => setCategory(data.meals));
  }, [name]);

  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="content">
      <button className="goBack btn btn-primary" onClick={goBack}>Go Back</button>
      {category.length ? (
        category.map((item) => (
          <div
            className="card text-center my-3"
            style={{
              width: "19rem",
              minHeight: "27rem",
              borderRadius: "2rem 2rem 1.5rem 1.5rem",
              boxShadow: ".5rem .5rem 0rem rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={item.strMealThumb}
              className="card-img-top image-fluid"
              style={{
                borderRadius: "2rem 2rem 0 0",
              }}
              alt={item.strMeal}
            />
            <div className="card-body">
              <h5 className="card-title">{item.strMeal}</h5>
              <Link
                className="btn btn-success mt-3"
                to={`/details/${item.idMeal}`}
              >
                Details
              </Link>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Category;
