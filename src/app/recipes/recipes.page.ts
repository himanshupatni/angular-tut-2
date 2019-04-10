import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
recipes : Recipe[]= [
  {
id: '01',
title: 'Pizza',
imgUrl:'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
ingredients:["spices","vegetables","cheese"]
},
{
  id: '02',
  title: 'Pasta',
  imgUrl:'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/toad_in_the_hole_with_86283_16x9.jpg',
  ingredients:["Spagetti","vegetables","cheese","oil"]
  }
];
  constructor() { }

  ngOnInit() {
  }

}
