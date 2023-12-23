import React from 'react'
import Recipe from './recipe'

const Recipes = ({ recipes }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe}/>
        ))}
      </div>
    </>
  );
};

export default Recipes;