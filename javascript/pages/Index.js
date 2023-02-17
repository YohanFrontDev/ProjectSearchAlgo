import { recipes } from "../data/Recipes.js";
import { Recipe } from "../classes/Recipe.js";
import { Dropdown } from "../components/Dropdown.js";
import { Search } from "../classes/Search.js";

const ingredients = new Set();
const appliances = new Set();
const ustensils = new Set();

export class HomePage {
  constructor() {
    this.selectedTags = new Set();
    this.initHomePage();
  }

  initHomePage() {
    recipes.forEach((recipe) => {
      new Recipe(recipe);
    });

    // Créations des tableaux Ingrédients, Appareils et Ustensiles.
    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredients.add(ingredient.ingredient);
      });
      appliances.add(recipe.appliance);
      recipe.ustensils.forEach((ustensil) => {
        ustensils.add(ustensil);
      });
    });

    // Évènement des menus déroulants
    let dataTypeDropdown = "";
    const searchBar = new Search(recipes, dataTypeDropdown, this.selectedTags);
    const chevronDownIngredients = document.querySelector(
      ".arrow-ingredients .fa-chevron-down"
    );
    chevronDownIngredients.addEventListener("click", () => {
      dataTypeDropdown = "ingredients";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
    const inputIngredients = document.querySelector("#search-ingredients");
    inputIngredients.addEventListener("click", () => {
      dataTypeDropdown = "ingredients";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
    const chevronDownAppliances = document.querySelector(
      ".arrow-appliances .fa-chevron-down"
    );
    chevronDownAppliances.addEventListener("click", () => {
      dataTypeDropdown = "appliances";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
    const inputAppliances = document.querySelector("#search-appliances");
    inputAppliances.addEventListener("click", () => {
      dataTypeDropdown = "appliances";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
    const chevronDownUstensils = document.querySelector(
      ".arrow-ustensils .fa-chevron-down"
    );
    chevronDownUstensils.addEventListener("click", () => {
      dataTypeDropdown = "ustensils";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
    const inputUstensils = document.querySelector("#search-ustensils");
    inputUstensils.addEventListener("click", () => {
      dataTypeDropdown = "ustensils";
      this.newDropdown(dataTypeDropdown, searchBar);
    });
  }

  // Création du menu déroulant.
  newDropdown(dataTypeDropdown, searchBar) {
    new Dropdown(dataTypeDropdown, Array.from(dataTypeDropdown), this.selectedTags, searchBar);
  }
}

window.onload = new HomePage();
