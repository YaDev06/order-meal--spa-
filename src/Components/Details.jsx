import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getById } from "../actions";

const Details = () => {
  const [info, setInfo] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = recipe;

  useEffect(() => {
    getById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="details text-center m-auto">
      <button className="goBack btn btn-primary" onClick={goBack}>Go Back</button>
      <img src={strMealThumb} alt={strMeal} className="dImg mt-5" />
      <div className="container-fluid">
        <h1 className="text-center my-3">{strMeal}</h1>
        <h4 className="text-center">{strCategory}</h4>
        <h6 className="text-center">National Place is {strArea}</h6>
        <p className="w-75 text-center m-auto">{strInstructions}</p>
        <button
          onClick={() => setInfo(!info)}
          className="btn btn-info my-3 px-3"
        >
          {info ? "Close" : "Show More Details"}
        </button>
      </div>

      {info === true && (
        <div className="container">
          <table className="table table-light text-start">
            <thead>
              <tr>
                <th>Recipe</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                    );
                  } else {
                    return null;
                  }
                })}
            </tbody>
          </table>
          <iframe
            className="m-auto my-3"
            width="80%"
            height="500"
            src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
            frameborder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Details;
