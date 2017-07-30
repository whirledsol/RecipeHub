import { Component } from '@angular/core';
import { Recipe } from './app.model.recipe';





const DEMO_RECIPES: Array<Recipe> = [
  {
    id: 1,
    name: 'Lemon Risotto',
    ingredients: ['lemon','risotto'],
    instructions: ['rescue a damsel in distress']
  },
  {
    id: 2,
    name: 'Western OmNOMlette',
    ingredients: ['oil','eggs','milk','sriracha sauce'],
    instructions: ['greese a pan']
  }



];


@Component({
  selector: 'selector',
  templateUrl: './app.selector.html'
})
export class RecipeSelector {
  title = 'RecipeHub';
  recipes = DEMO_RECIPES;
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
