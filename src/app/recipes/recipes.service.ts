import { Recipe } from "./recipes.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  
   recipes: Recipe[] = [
    {
      id: "01",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "02",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "03",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "04",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "05",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "06",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "07",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "08",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "09",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "10",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "11",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "12",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "12",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "14",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "15",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "16",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "17",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "18",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "19",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "20",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    },{
      id: "21",
      title: "Pizza",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg",
      ingredients: ["spices", "vegetables", "cheese", "organo", "pizza base"]
    },
    {
      id: "22",
      title: "Pasta",
      imgUrl:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg",
      ingredients: ["Spagetti", "vegetables", "cheese", "oil", "garlic bread"]
    }
  ];

  constructor() {}
  getAllRecipes() {
    
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes.length);
  
  }
}
