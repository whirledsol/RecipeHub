export class Recipe {
  id: number;
  name: string;
  ingredients: Array<string>;
  instructions: Array<string>;
  views?: number = 0;
  rating?: number = 0.0;
}
