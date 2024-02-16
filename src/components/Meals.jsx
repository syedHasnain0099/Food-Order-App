import React from "react";
import useFetch from "../hooks/useFetch";
import MealItem from "./MealItem";
import Error from "./Error";

const Meals = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/meals", {});
  if (loading) {
    return <p className="center">Fetching Meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
