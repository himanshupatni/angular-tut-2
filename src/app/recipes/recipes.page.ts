import { RecipesService } from './recipes.service';
import { Recipe } from "./recipes.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
 recipes: Recipe [];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    // this.recipes=this.recipesService.getAllRecipes(); // why this is not working
    console.log(this.recipes);

    
  }
}
