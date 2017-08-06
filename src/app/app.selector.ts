import { Component } from '@angular/core';
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Recipe } from './app.model.recipe';





const DEMO_RECIPES: Array<Recipe> = [
  {
    id: 1,
    name: 'Lemon Risotto',
    genre: 'Italian',
    ingredients: ['lemon','risotto'],
    instructions: ['rescue a damsel in distress']
  },
  {
    id: 2,
    name: 'Western OmNOMlette',
    genre: 'Breakfast',
    ingredients: ['oil','eggs','milk','sriracha sauce'],
    instructions: ['greese a pan']
  }



];





@Pipe({
  name: "RecipeLikeNameFilter"
})
@Injectable()
export class RecipeLikeNameFilter implements PipeTransform{
  transform(items: Array<Recipe>, filterinput: string): Array<Recipe>{
    if((filterinput || '') == ''){return items;}
    return items.filter(item=> (item.name || '').toLowerCase().indexOf(filterinput.toLowerCase()) >= 0);
  }
}

@Component({
  selector: 'selector',
  templateUrl: './app.selector.html'
})
export class RecipeSelector {
  title = 'RecipeHub';
  recipes = DEMO_RECIPES;
  selectedRecipe: Recipe;
  searchFood: string;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}

