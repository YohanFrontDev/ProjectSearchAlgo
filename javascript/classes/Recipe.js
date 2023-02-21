export class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.ingredients = recipe.ingredients;
    this.time = recipe.time;
    this.description = recipe.description;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
    this.createRecipe();
  }

  /**
   * Création de ma card
   */
  createRecipe() {
    const mainRecipe = document.querySelector(".part-recipes");
    mainRecipe.innerHTML +=
      `<article data-id="${this.id}" data-ingredients= "` +
      this.ingredients
        .map((ingredient) => {
          return ` ${ingredient.ingredient.toLowerCase()} `;
        })
        .join(",") +
      `" data-appliance="${this.appliance.toLowerCase()}" data-ustensil="` +
      this.ustensils
        .map((ustensil) => {
          return ` ${ustensil.toLowerCase()} `;
        })
        .join(",") +
      `">
        <div class="picture"></div>
        <div class="name-and-time">
            <h2 class="name" data-name="${this.name}">${this.name}</h2>
            <p><i class="far fa-clock"></i> ${this.time} min</p>
        </div>
        <div class="ingredients-and-description">
          <div class="ingredients">
          ` +
      this.ingredients
        .map((ingredient) => {
          const unitHtml = ingredient.unit
            ? `<span class="unit" data-unit="${ingredient.unit}">${ingredient.unit}</span>`
            : "";
          const quantity = ingredient.quantity
            ? `<span class="quantity" data-quantity="${ingredient.quantity}">${ingredient.quantity}</span>`
            : "";
          return `<p class="ingredient" data-ingredient="${ingredient.ingredient.toLowerCase()}"><span class="name-ingredient">${
            ingredient.ingredient
          }</span> : ${quantity} ${unitHtml}</p>`;
        })
        .join("") +
      ` </div>
          <p class="description" data-description="${this.description}">${this.description}</p>
        </div>
      </article>`;
    const recipesDom = document.querySelectorAll("article");
    recipesDom.forEach((recipe) => {
      recipe.style.display = "block";
    });
  }
}
