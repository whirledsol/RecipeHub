export class Recipe {
  id: number;
  name: string;
  ingredients?: Array<string>;
  ingredientsText?: string;
  genre: string;
  instructions?: Array<string>;
  instructionsText?: string;
  difficulty?: number = -1;
  time?: number = -1;
  rating?: number = -1;
  views?: number = 0;
/*
  instructionsParse(): void{
    this.instructions = this.instructionsText.split("\n");
  }
  ingredientsParse?(): void{
    this.ingredients = this.ingredientsText.split("\n");
  }
  */
}
