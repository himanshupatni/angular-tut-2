import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipes.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        //redirect
        this.router.navigate(["/recipes"]);
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      // console.log(this.loadedRecipe.imgUrl);
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: "Are you sure",
        message: "Do you really want to delete this Recipe",
        buttons: [
          {
            text: "Canel",
            role: "canel"
          },
          {
            text: "Delete",
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              console.log(this.loadedRecipe.id);

              this.router.navigate(["/recipes"]);
            }
          }
        ]
      })
      .then(alertEl => alertEl.present());
  }
}
