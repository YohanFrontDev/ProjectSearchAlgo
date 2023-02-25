import {recipes} from '../data/Recipes.js';


function loopMethod(recipes) {
  let myValue = "Lait de coco";

  let arrayRecipes = [];
  
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const recipeNameLower = recipe.name.toLowerCase().includes(myValue.toLowerCase());
    const recipeDescLower = recipe.description.toLowerCase().includes(myValue.toLowerCase());
    const ingredients = recipe.ingredients;
    let hasTheWantedIngredient = false;
    for (let j = 0; j < ingredients.length; j++) {
      if (ingredients[j].ingredient.toLowerCase().includes(myValue.toLowerCase())){
        let includesInIngredients = true;
      }
    }
    if (recipeNameLower || hasTheWantedIngredient || recipeDescLower){
      arrayRecipes.push(recipe);
    }
  }
}

function arrayMethod(recipes) {
  let myValue = "Lait de coco";

  const arrayRecipes = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(myValue.toLowerCase()) ||
          recipe.description.toLowerCase().includes(myValue.toLowerCase()) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(myValue.toLowerCase())
            
          )
        );
      });
}



arrayMethod(recipes);
loopMethod(recipes);
