import React from 'react'
import Recipe from './recipe'

const Recipes = ({ recipes }) => {
  // Check if the page and its body field exist
  if (!recipes) {
    return <div>Loading...</div>
  }

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